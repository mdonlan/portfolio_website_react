import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import './about.css';

class About extends Component {
  render() {
    return (
      <div className="aboutPage">
      
        <Fade top>
          <div className="aboutTitle">About Me</div>
        </Fade>
        
        <Slide right>
          <div className="aboutText">
            Hi, I'm Michael. I graduated from Bentley University in 2015 with a degree in finance. 
            I started programming after college and decided to make it my career. 
            I mostly do web development but I also love making video games, both for the web and in Unity. 
            <p />
            I am a front-end developer and mostly use React and Vue to develop my websites.
          </div>
        </Slide>
      </div>
    )
  }
}

export default About;