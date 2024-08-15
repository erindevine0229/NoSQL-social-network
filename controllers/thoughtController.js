const { User, Thought } = require('../models');

module.exports = {

    // Logic for thought actions

async getAllThoughts(req, res) {
    try {
        const allThoughts = await Thought.find();
        res.json(allThoughts)
    } catch (err) {
        res.status(500).json(err);
    }
},


async getThoughtById(req, res) {
    try { 
        const thought = await Thought.findOne({ _id: req.params.thoughtId })
        if (!thought) {
            return res.status(400).json({ message: "Unable to locate thought with that ID" })
        }
        res.json( { thought });
    } catch (err) {
        res.status(500).json(err);
    }
},


async createNewThought(req, res) {
    try {
        const thought = await Thought.create(req.body);
        const user = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: {thoughts: thought._id } },
            { new: true }
        )
        res,json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
},

async updateThoughtById(req,res) {

},


async deleteThoughtById(req, res) {

},

// Logic for reaction actions


async addNewReaction(req, res) {

},


async deleteExistingReaction(req, res) {

},

};