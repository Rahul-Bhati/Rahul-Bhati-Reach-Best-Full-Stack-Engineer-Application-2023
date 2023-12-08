import React, { useState } from 'react';
import NavBar from './components/Navbar';
import QuestionForm from './components/QuestionForm';
import ResultsFrame from './components/ResultsFrame';
import './App.css'
import Header from './components/Header';

function App() {
  const [suggestedBook, setSuggestedBook] = useState(null);

  const handleFormSubmit = (answer1, answer2) => {
    // Here, you would make a request to your back-end with user answers
    // and get a suggested book in response. For simplicity, we'll generate
    // a random book here.
    const books = [
      { title: 'Book 1', genre: 'Fantasy', mood: 'Happy' },
      { title: 'Book 2', genre: 'Mystery', mood: 'Suspenseful' },
      { title: 'Book 3', genre: 'Romance', mood: 'Romantic' },
    ];
    const randomIndex = Math.floor(Math.random() * books.length);
    setSuggestedBook(books[randomIndex]);
  };

  return (
    <div>
      <NavBar />
      <Header/>
      <QuestionForm onSubmit={handleFormSubmit} />
      <ResultsFrame suggestedBook={suggestedBook} />
    </div>
  );
}

export default App;
