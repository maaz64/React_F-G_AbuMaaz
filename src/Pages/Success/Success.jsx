import React from 'react';
import './Success.css';
import { useNavigate } from 'react-router-dom';

const Success = ({setTogggleScreen}) => {
    const navigate = useNavigate();
    const handleClick = ()=>{
        setTogggleScreen(false);
        navigate('/submissions')
    }
  return (
    <div className="success-page">
      <div className="tick-mark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="simple-tick"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <h2>Thank you for providing the feedback</h2>
      <p>we will work towards improving your experince</p>
      <button onClick={handleClick} className="go-to-submissions-button">
        Close
      </button>
    </div>
  );
};

export default Success;
