import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/home/Home.js';
import Projects from './components/projects/Projects.js';
import Contact from './components/contact/Contact.js';
import About from './components/about/About.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
  
        <div className="navigation">
          <div className="navigation-sub">
          <Link to="/" className="item">Home</Link>
          <Link to="/projects" className="item">Projects</Link>
          <Link to="/contact" className="item">Contact</Link>
          <Link to="/about" className="item">About</Link>
  
          </div>
        </div>
      </div>
    </BrowserRouter>    
  );
}

export default App;
