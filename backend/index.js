const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (assuming a local instance for simplicity)
mongoose.connect('mongodb://localhost/bookMatchingApp', { useNewUrlParser: true, useUnifiedTopology: true });

// Define mongoose schemas for students and books
const studentSchema = new mongoose.Schema({
     name: String,
     criteria1: Number,
     criteria2: Number,
     criteria3: Number
});

const bookSchema = new mongoose.Schema({
     title: String,
     author: String,
     criteria1: Number,
     criteria2: Number,
     criteria3: Number
});

const Student = mongoose.model('Student', studentSchema);
const Book = mongoose.model('Book', bookSchema);

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Calculate the difference of vectors function
function calculateDifferenceVector(studentVector, bookVector) {
     // Implement your vector calculation logic here
     // For simplicity, let's assume a basic formula
     return Math.abs(studentVector - bookVector);
}

// Route to find matched books based on student ID
app.get('/match/:studentId', async (req, res) => {
     try {
          const student = await Student.findById(req.params.studentId);

          if (!student) {
               return res.status(404).json({ message: 'Student not found' });
          }

          // Fetch all books from the database
          const books = await Book.find();

          // Find the best-matched books
          const matchedBooks = books.map((book) => {
               const differenceVector = calculateDifferenceVector(student.criteria1, book.criteria1) +
                    calculateDifferenceVector(student.criteria2, book.criteria2) +
                    calculateDifferenceVector(student.criteria3, book.criteria3);

               return { book, differenceVector };
          });

          // Sort matched books by the difference vector
          matchedBooks.sort((a, b) => a.differenceVector - b.differenceVector);

          res.json({ matchedBooks });
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
     }
});

// Start the server
app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});
