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
    name: 'Tv Tracker',
    description: 'Never miss a show again! Keep track of all your favorite TV shows and see if they are airing this week.',
    demoLink: 'https://mdonlan.github.io/tvApp/',
    githubLink: 'https://github.com/mdonlan/tvApp',
    imageName: 'tvAppImg.PNG',
  },
  {
    name: 'Todo App',
    description: 'Manage your lists and todos easily with this React based app. All data is stored with firebase.',
    demoLink: 'https://mdonlan.github.io/react_todo/',
    githubLink: 'https://github.com/mdonlan/react_todo',
    imageName: 'react_todo.PNG',
  },
  {
    name: 'Canvas Particles',
    description: 'A canvas experiment that creates particles that move and interact with eachother and the user.',
    demoLink: 'https://mdonlan.github.io/canvas-particles/',
    githubLink: 'https://github.com/mdonlan/canvas-particles',
    imageName: 'canvasParticles.PNG',
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
                        <img className='browserImg' alt={project.imageName} src={require('../assets/projectImages/' + project.imageName)}/>
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
