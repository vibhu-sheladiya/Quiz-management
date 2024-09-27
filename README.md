
Quiz Application Backend 🎯


Description 📝

This backend API, built with Node.js, Express, and MongoDB, helps manage quizzes and store user responses. It provides endpoints to:

🛠️ Create Quizzes with multiple questions.
📋 Retrieve Quizzes and view individual quiz details.
✅ Submit Answers and get scores based on correct answers.

Features 🚀
Quiz Management: Create and view quizzes.
Question Handling: Each quiz has multiple-choice questions with correct answers.
Score Calculation: Users can submit answers and get automatic score feedback.
Error Handling: Handles invalid data and submissions with meaningful errors.
Tech Stack 💻
Node.js
Express.js
MongoDB
Mongoose
Joi (validation)
Setup 🛠️
Clone the repo:
bash
Copy code
git clone https://github.com/vibhu-sheladiya/quiz-app-backend.git  
Install dependencies:
bash
Copy code
npm install  
Setup environment: Create a .env file with MongoDB connection details:
bash
Copy code
MONGO_URI=mongodb://localhost:27017/  
PORT=5000  
Run server:
bash
Copy code
npm run dev  
API Endpoints 🔗
POST /api/quizzes: Create a quiz.
GET /api/quizzes: Get all quizzes.
GET /api/quizzes/
: Get quiz by ID.
POST /api/quizzes/submit: Submit answers and get score.
Future Enhancements 🌟
🧑‍💻 User Authentication
⏳ Time-based Quizzes
🏆 Leaderboard System