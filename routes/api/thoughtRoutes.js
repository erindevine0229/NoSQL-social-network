const router = require('express').Router();

const {

    getALlThoughts,
    getThoughtById,
    createNewThought,
    updateThoughtById,
    deleteThoughtById,
    addNewReaction,
    deleteExistingReaction,

} = require('../../controllers/thoughtController');





module.exports = router;