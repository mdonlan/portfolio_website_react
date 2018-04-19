import React, { Component } from 'react'

import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contactPage page">
        <div className='contactTitle'>Contact</div>
        <div className="contactText">
          <div>Please feel free to contact me if you have any business inquiries or questions.</div>
          <div>I am currently available for work.</div>
          <div className="email">me@michaeldonlan.com</div>
        </div>
      </div>
    )
  }
}

export default Contact;