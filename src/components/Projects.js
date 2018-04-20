import React, { Component } from 'react'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

import './projects.css';

const projects = [
  {
    name: 'Twitch UI Redesign',
    description: 'I redesigned the Twitch.com website with a simple, uncluttered layout. The site is made using the Vue.js framework. All data and video is pulled from the Twitch API.',
    demoLink: 'https://mdonlan.github.io/twitch_tv_app/',
    githubLink: 'https://github.com/mdonlan/twitch_tv_app',
    imageName: 'twitchSmall.PNG',
  },
  {
    name: 'Space Game',
    description: 'A space themed game made with Phaser.js. Try to shoot or dodge the asteroids in your way as you fly through space.',
    demoLink: 'https://mdonlan.github.io/phaserSpaceGame/',
    githubLink: 'https://github.com/mdonlan/phaserSpaceGame',
    imageName: 'spaceGame.PNG',
  },
  {
    name: 'Tv Tracker',
    description: 'Never miss a show again! Keep track of all your favorite TV shows and see if they are airing this week.',
    demoLink: 'https://mdonlan.github.io/tvApp/',
    githubLink: 'https://github.com/mdonlan/tvApp',
    imageName: 'tvAppImg.PNG',
  },
]


class Projects extends Component {
  render() {
    return (
      <div className="page projectsPage">

        <Fade top>
          <div className='projectsTitle'>Projects</div>
        </Fade>
        
        <div className='projectsContainer'>
          {projects.map((project) => { 
            return (
              <Bounce left cascade key={project.name}>
                <div className='project'>

                  <div className='browser'>
                      <div className='browserTopNav'>
                        <div className='broswerNavButtons'>
                          <div className='browserNavButtonBack broswerNavButton'><i className="fa fa-arrow-left"></i></div>
                          <div className='browserNavButtonForward broswerNavButton'><i className="fa fa-arrow-right"></i></div>
                          <div className='browserNavButtonRefresh broswerNavButton'><i className="fa fa-sync"></i></div>
                        </div>
                        <div className='browserWindowButtonsContainer'>
                          <div className='browserWindowButton'></div>
                          <div className='browserWindowButton'></div>
                          <div className='browserWindowButton'></div>
                        </div>
                        <div className='broswerSearchBar'></div>
                      </div>
                      <div className='browserImgContainer'>
                        <img className='browserImg' src={require('../assets/projectImages/' + project.imageName)}/>
                      </div>
                    </div>

                    <div className='projectText'>
                      <div className='projectTitle'>{project.name}</div>
                      <div className='projectDescription'>{project.description}</div>
                      <div className='projectLinksContainer'>
                        <a className='projectLink' href={project.demoLink}>DEMO</a>
                        <a className='projectLink' href={project.githubLink}>GITHUB</a>
                      </div>
                    </div> 

                </div>
              </Bounce>
            )
          })}  
        </div>
      </div>
    )
  }
}

export default Projects;
