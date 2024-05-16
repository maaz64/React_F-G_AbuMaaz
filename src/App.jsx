import React, { useState, useEffect } from 'react';

import './App.css';
import FeedbackForm from './Pages/FeedbackForm/FeedbackForm';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Submissions from './Pages/DataTable/Submissions';
import Success from './Pages/Success/Success';

const App = () => {
  const [submissions, setSubmissions] = useState([]);
  const [toggleScreen, setTogggleScreen] = useState(false);

  useEffect(() => {
    const storedSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
    setSubmissions(storedSubmissions);
  }, []);

  const handleFormSubmit = (formData) => {
    const newSubmissions = [formData,...submissions];
    setSubmissions(newSubmissions);
    localStorage.setItem('submissions', JSON.stringify(newSubmissions));
    setTogggleScreen(true);
  };

  return (
    <div className="App">
      <h1>Aromatic Bar Feedback</h1>

      <BrowserRouter>
      <Routes>

        <Route path='/' element={toggleScreen?<Success setTogggleScreen={setTogggleScreen}/>:<FeedbackForm onSubmit={handleFormSubmit} />}/>
        <Route path='/submissions' element={<Submissions submissions={submissions} />}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
};

export default App;
