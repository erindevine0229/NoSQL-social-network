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
        await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: {thoughts: thought._id } },
            { new: true }
        )
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
},

async updateThoughtById(req,res) {
    try {
        const thought = await Thought.findOneAndUpdate (
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        if(!thought) {
            res.status(404).json({ message: "Unable to locate thought with this ID" });
        }
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
},


async deleteThoughtById(req, res) {
    try {
        const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
        if (!thought) {
            res.status(404).json({ message: "Unable to find thought with this ID" });
        }
        res.json({ message: "Thought successfully removed!" });
    } catch (err) {
        res.status(500).json(err);
    }
},

// Logic for reaction actions


async addNewReaction(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body }},
            { runValidators: true, new: true }
        );
        if (!thought) {
            return res.status(404).json({ message: "Unable to locate thought with that ID"});
        }
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
},


async deleteExistingReaction(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions : { reactionId: req.params.reactionId }}},
            { runValidators: true, new: true }
        );
        if (!thought) {
            res.status(404).json({ message: "Unable to locate thought with this ID" });
        }
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
},

};