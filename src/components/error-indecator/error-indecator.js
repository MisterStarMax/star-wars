import React from 'react';
import './error-indecator.css';
import error from './revenge.jpg';

const ErrorIndecator = () => {
  return(
    <div className="error-indecator">
      <img src={error} alt="error-indecator" />
    </div>
  );
}

export default ErrorIndecator;
