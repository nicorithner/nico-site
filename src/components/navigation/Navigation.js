import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navigation-sub">
      <Link to="/" className="item">Home</Link>
      <Link to="/projects" className="item">Projects</Link>
      <Link to="/contact" className="item">Contact</Link>
      <Link to="/about" className="item">About</Link>
  
    </div>
  );
}

export default Navigation;
