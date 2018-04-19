import React, { Component } from 'react';
import './App.css';

import Projects from './components/Projects'
import Intro from './components/Intro'
import Contact from './components/Contact'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <Projects ref='projects' />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
