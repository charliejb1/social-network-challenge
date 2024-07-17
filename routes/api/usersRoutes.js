const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addReaction,
  removeReaction,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:studentId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/reactions
router.route('/:studentId/assignments').post(addReaction);

// /api/users/:userId/reactions/:reactionId
router.route('/:studentId/assignments/:assignmentId').delete(removeReaction);

module.exports = router;