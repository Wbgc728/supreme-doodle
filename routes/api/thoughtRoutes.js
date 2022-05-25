const router = require('express').Router();
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);


// /api/thoughts/:thoughId
router.route('/:thoughId').get(getThoughtById).put(updateThought).delete(deleteThought);