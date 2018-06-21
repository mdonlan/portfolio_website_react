import React, { Component } from 'react'

import Fade from 'react-reveal/Fade';
import scrollToElement from 'scroll-to-element'

import './intro.css'

class Intro extends Component {

  constructor(props) {
    super(props);
    this.navOnClick = this.navOnClick.bind(this);
  }

  navOnClick(e) {
    let targetElem;
    const target = e.target.textContent;
    if(target === 'Projects') {
      targetElem = '.projectsPage'
    } else if (target === 'About') {
      targetElem = '.aboutPage'
    } else if (target === 'Contact') {
      targetElem = '.contactPage'
    }

    scrollToElement(targetElem, {
      offset: 0,
      ease: 'outSine',
      duration: 1000
    });
  }

  render() {
    return (
      <Fade duration={4000}>
        <div className="introPage">
          <div className="backgroundOpactiy"></div>
          <div className="greeting">Hi I'm Michael. Im a front-end web developer located in Portland, Maine.</div>
          <div className="nav">
            <div className="navButton" onClick={this.navOnClick}>Projects</div>
            <div className="navButton" onClick={this.navOnClick}>About</div>
            <div className="navButton" onClick={this.navOnClick}>Contact</div>
          </div>
          <canvas className='canvas'></canvas>
        </div>
      </Fade>
    )
  }
}

export default Intro;