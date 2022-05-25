const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,

} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/userId
router.route('/:userId/friends/userId').post(addFriend);

// /api/users/:userId/friends/:userId
router.route('/:userId/friends/:userId').delete(removeFriend);


module.exports = router;
