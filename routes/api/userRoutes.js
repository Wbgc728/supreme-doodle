const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/user/:userId
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);


module.exports = router;
