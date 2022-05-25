const router = require('express').Router();
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  RemoveReaction
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);


// /api/thoughts/:thoughtId
router.route('/:thoughId').get(getThoughtById).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/reactionId').post(createReaction).delete(RemoveReaction);