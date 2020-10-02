import React, { Component } from 'react'

import Fade from 'react-reveal/Fade';
import scrollToElement from 'scroll-to-element'

// import backgroundImage from '../assets/1.jpg' // relative path to image
import './intro.css'

// import particles from '../canvas_particles';

class Intro extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener("resize", this.resizeEvent);
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

        scrollToElement(targetElem, { offset: 0, ease: 'outSine', duration: 1000 });
    };

    // handleImageLoaded = () => {
    //     console.log('background image has loaded...')
    //     let backgroundImage = document.querySelector(".backgroundImage");
    //     let introPage = document.querySelector(".introPage");
    //     introPage.style.height = backgroundImage.height + 'px';
    //     this.props.setImgLoaded();
    // };

    render() {
        return (
            <Fade duration={4000}>
                <div className="introPage">
                    {/* <img className="backgroundImage" src={backgroundImage} onLoad={this.handleImageLoaded}></img> */}
                    <div className="backgroundOpactiy"></div>
                    <div className="greeting">Hi I'm Michael. I'm a front-end web developer located in Portland, Maine.</div>
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