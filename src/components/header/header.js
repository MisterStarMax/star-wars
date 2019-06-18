import React from 'react';
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
  return(
    <div className="header">
      <Link to="/" className="logo"><h2>Star Wars</h2></Link>
      <div className="menu">
        <Link to="/people/">People</Link>
        <Link to="/planets/">Planets</Link>
        <Link to="/starships/">Starships</Link>
      </div>
    </div>
  );
};

export default Header;
