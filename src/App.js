import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css';
import Projects from './components/Projects'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import About from './components/About';
import Header from './components/Header';

import Contact from './components/Contact';

function App() {
  return (
      <div>
          <Router>
            
                  <Switch>
                      <Route exact path="/">
                          <Header />
                          <About />
                      </Route>
                      <Route path="/About">
                          <Header />
                          <About />
                      </Route>
                      <Route path="/Projects">
                          <Header />
                          <Projects />
                      </Route>
                      <Route path="/Contact">
                          <Header />
                          <Contact />
                      </Route>
                  </Switch>
              
          </Router>
        
    </div>
  );
}

export default App;
