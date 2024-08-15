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



module.exports = router;


