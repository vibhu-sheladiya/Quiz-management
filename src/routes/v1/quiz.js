const express = require('express');
const router = express.Router();
const { getAllQuizzes, getQuizById, submitQuiz ,createQuiz} = require('../../controllers/quizController');

router.get('/', getAllQuizzes);
router.get('/:id', getQuizById);
router.post('/submit', submitQuiz);
router.post('/add-quize', createQuiz);

module.exports = router;
