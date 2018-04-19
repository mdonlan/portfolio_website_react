import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contactPage">
        <Fade top>
          <div className='contactTitle'>Contact</div>
        </Fade>
        
        <Slide left>
        <div className="contactText">
          <div>Please feel free to contact me if you have any business inquiries or questions.</div>
          <p />
          <div>I am currently <span className='green'>available</span> for work.</div>
          <p />
          <div>me@michaeldonlan.com</div>
        </div>
        </Slide>
      </div>
    )
  }
}

export default Contact;