const { User, Thought } = require('../models');

module.exports = {

   // Logic for user actions

async getAllUsers(req, res) {
    try {
        const allUsers = await User.find();
        res.json(allUsers);
   } catch (err) {
    res.status(500).json(err);
   }
},

async getUserById(req, res) {
    try {
        const user = await User.findOne({ _id: req.params.userId })
        if (!user) {
            return res.status(404).json({ message: "No user found with this ID" });
        }
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
},

async createNewUser(req, res) {
    try {
        const userData = await User.create(req.body);
        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
},

async updateUserById(req, res) {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        if (!user) {
            res.status(404).json({ message: "Unable to find user with that ID" });
        }
        res.json(user)
    } catch (err) {
        res.status(500).json(err);
    }
},


async deleteUserById(req, res) {
    try { 
        const user= await User.findOneAndDelete({ _id: req.params.userId });

        if (!user) {
            return res.status(404).json({ message: "No user found with that Id." });
        }

        await Thought.deleteMany({ _id: { $in: user.thoughts} });
        res.json({ message: "All thoughts from this user successfully deleted!" })
    } catch (err) {
        res.status(500).json(err);
    }
},


//  Logic for friend actions


async addNewFriend(req, res) {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId }},
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ message: "Unable to locate user with this Id" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
},


async deleteExistingFriend(req, res) {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId }},
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ message: "Unable to locate user with that ID" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
},

};