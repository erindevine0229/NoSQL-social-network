const router = require('express').Router();

const {

    getAllThoughts,
    getThoughtById,
    createNewThought,
    updateThoughtById,
    deleteThoughtById,
    addNewReaction,
    deleteExistingReaction,
    getAllThoughts,

} = require('../../controllers/thoughtController');

router.route('/thoughts').get(getAllThoughts).post(createNewThought);

router.route('/:thoughtId').get(getThoughtById).put(updateThoughtById).delete(deleteThoughtById);

router.route('/:thoughtId/reactions').post(addNewReaction);

router.route('/:thoughtId/reactions/:reactonId').delete(deleteExistingReaction);


module.exports = router;