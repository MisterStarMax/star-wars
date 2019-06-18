import React from 'react';
import { Link } from "react-router-dom";
import ErrorBoundry from '../error-boundry';

import people from './person-menu.jpg';
import planets from './planets-menu.jpg';
import starships from './starships-menu.jpg';

import './menu.css';

const Menu = () => {
  return(
    <div className="menu-main">
      <h2>Welcome to world Star Wars</h2>
      <ErrorBoundry>
        <div className="menu-block">
          <Link to="/people/">
            <h4>people</h4>
            <img src={people} alt="people"/>
          </Link>
          <Link to="/planets/">
          <h4>planets</h4>
            <img src={planets} alt="planets"/>
          </Link>
          <Link to="/starships/">
          <h4>starships</h4>
            <img src={starships} alt="starships"/>
          </Link>
        </div>
      </ErrorBoundry>
    </div>
  );
};

export default Menu;
