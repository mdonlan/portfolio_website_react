import React, { Component } from 'react';
import './App.css';

import Fade from 'react-reveal/Fade';

import Projects from './components/Projects'
import Intro from './components/Intro'
import Contact from './components/Contact'
import About from './components/About'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Fade duration={1000}>
            <div className='appContainer'> 
              <Intro />
              <Projects ref='projects' />
              <About />
              <Contact />
            </div>
          </Fade>
        </div>
    );
  }
}

export default App;
