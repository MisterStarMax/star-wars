import React from 'react';
import pageNotFound from './page-not-found.jpg';
import './notfound-page.css';

const PageNotFound = () => {
  return(
    <div className="page-not-found">
      <h1>Page not found!</h1>
      <img src={pageNotFound} alt="page not found" />
    </div>
  );
}

export default PageNotFound;
