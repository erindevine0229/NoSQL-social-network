const router = require('express').Router();

const {

    getAllUsers,
    getUserByID,
    createNewUser,
    updateUserById,
    deleteUserById,
    addNewFriend,
    deleteExistingFriend,

} = require('../../controllers/userController');

router.route('/users').get(getAllUsers).post(createNewUser);

router.route('/:userId').get(getUserByID).put(updateUserById).delete(deleteUserById);

router.route('/:userId/friends/:friendId').post(addNewFriend).delete(deleteExistingFriend);


module.exports = router;


