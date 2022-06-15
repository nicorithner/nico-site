import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/Home.js";
import Projects from './components/projects/Projects.js';
import Contact from "./components/contact/Contact.js";
import Navigation from "./components/navigation/Navigation.js";
import { projects } from './projectList.js';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <Navigation />
        </div>

        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/projects"
          render={() => <Projects projectlist={projects} />} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
