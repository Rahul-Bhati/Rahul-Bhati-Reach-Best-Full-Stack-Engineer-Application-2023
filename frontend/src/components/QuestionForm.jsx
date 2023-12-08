import React, { useState } from 'react';

const QuestionForm = ({ onSubmit }) => {
     const [answer1, setAnswer1] = useState('');
     const [answer2, setAnswer2] = useState('');

     const handleSubmit = (e) => {
          e.preventDefault();
          onSubmit(answer1, answer2);
     };

     return (
          <form style={{ margin: '2rem' }} onSubmit={handleSubmit}>
               <label>
                    Question 1:
                    <input type="text" value={answer1} onChange={(e) => setAnswer1(e.target.value)} />
               </label>
               <br />
               <label>
                    Question 2:
                    <input type="text" value={answer2} onChange={(e) => setAnswer2(e.target.value)} />
               </label>
               <br />
               <button type="submit">Submit</button>
          </form>
     );
};

export default QuestionForm;
