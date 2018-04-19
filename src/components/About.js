import React, { Component } from 'react'

import './about.css';

class About extends Component {
  render() {
    return (
      <div className="aboutPage page">
        <div className="aboutTitle">About Me</div>
        <div className="aboutText">
          Hi, I'm Michael. I graduated from Bentley University in 2015 with a degree in finance. 
          I started programming after college and decided to make it my career. 
          I mostly do web development but I also love making video games, both for the web and in Unity. 
        </div>
      </div>
    )
  }
}

export default About;