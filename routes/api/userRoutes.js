const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserById,
  deleteUserById,
  addNewFriend,
  deleteExistingFriend,
} = require("../../controllers/userController");

router.route("/").get(getAllUsers).post(createNewUser);

router
  .route("/:userId")
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);


router
  .route("/:userId/friends/:friendId")
  .post(addNewFriend)
  .delete(deleteExistingFriend);

module.exports = router;
