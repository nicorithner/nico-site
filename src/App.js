import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import Contact from './components/contact/Contact.js';
import About from './components/about/About.js';
import Navigation from './components/navigation/Navigation.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <Navigation />
        </div>
    
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
    
      </div>
    </BrowserRouter>    
  );
}

export default App;
