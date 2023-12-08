import React from 'react';

const ResultsFrame = ({ suggestedBook }) => {
     return (
          <div style={{ margin: '2rem', border: '1px solid #ccc', padding: '1rem' }}>
               {suggestedBook ? (
                    <div>
                         <h3>Suggested Book:</h3>
                         <p>Title: {suggestedBook.title}</p>
                         <p>Genre: {suggestedBook.genre}</p>
                         <p>Mood: {suggestedBook.mood}</p>
                    </div>
               ) : (
                    <p>No suggestion yet. Please answer the questions.</p>
               )}
          </div>
     );
};

export default ResultsFrame;
