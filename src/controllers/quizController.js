const Quiz = require('../models/quiz.model');
// // Create a new quiz
exports.createQuiz = async (req, res) => {
    try {
      const { title, description, questions } = req.body;
  
      const newQuiz = new Quiz({
        title,
        description,
        questions,
      });
  
      const savedQuiz = await newQuiz.save();
      res.status(201).json(savedQuiz);
    } catch (err) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  

// Fetch all quizzes
exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Fetch quiz by ID
exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Submit Quiz and calculate score
exports.submitQuiz = async (req, res) => {
  try {
    const { quizId, userAnswers } = req.body;
    const quiz = await Quiz.findById(quizId);
    
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        score++;
      }
    });

    res.json({ score, totalQuestions: quiz.questions.length });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
