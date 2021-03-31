import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import Projects from './components/projects/Projects.js';
import Contact from './components/contact/Contact.js';
import About from './components/about/About.js';
import Navigation from './components/navigation/Navigation.js';
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
          <Navigation />
        </div>
      </div>
    </BrowserRouter>    
  );
}

export default App;
