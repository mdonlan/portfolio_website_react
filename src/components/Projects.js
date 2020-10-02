import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

import './projects.css';

const projects = [
  {
    name: 'Twitch App',
    demoLink: 'https://mdonlan.github.io/twitch_tv_app/#/',
    githubLink: 'https://github.com/mdonlan/twitch_tv_app',
    imageName: 'twitch_app.PNG',
  },
  {
    name: 'Tv Tracker',
    demoLink: 'https://mdonlan.github.io/tvApp/',
    githubLink: 'https://github.com/mdonlan/tvApp',
    imageName: 'tvAppImg.PNG',
  },
  {
    name: 'Todo App',
    demoLink: 'https://mdonlan.github.io/react_todo/',
    githubLink: 'https://github.com/mdonlan/react_todo',
    imageName: 'react_todo.PNG',
  },
  {
    name: 'Particles',
    demoLink: 'https://mdonlan.github.io/canvas-particles/',
    githubLink: 'https://github.com/mdonlan/canvas-particles',
    imageName: 'particles.PNG',
  },
]

export function Projects() {
  return (
    <div className="page projectsPage">
      <Fade top>
        <div className='projectsTitle'>Projects and Experiments</div>
      </Fade>
      <div className='projectsContainer'>
        {projects.map((project) => { 
          return (
            <div className='project'>
              <div className='browserImgContainer'>
                <img className='browserImg' alt={project.imageName} src={require('../assets/projectImages/' + project.imageName)}/>
              </div>
              <div className='projectText'>
                <div className='projectTitle'>{project.name}</div>
                <div className='projectLinksContainer'>
                  <a className='projectLink' href={project.demoLink}>DEMO</a>
                  <a className='projectLink' href={project.githubLink}>GITHUB</a>
                </div>
              </div>
            </div>
          )
        })}  
      </div>
    </div>
  )
}


// class Projects extends Component {
//   render() {
//     return (
//       <div className="page projectsPage">

//         <Fade top>
//           <div className='projectsTitle'>Projects and Experiments</div>
//         </Fade>
        
//         <div className='projectsContainer'>
//           {projects.map((project) => { 
//             return (
//                 <div className='project'>
//                 <div className='browserImgContainer'>
//                     <img className='browserImg' alt={project.imageName} src={require('../assets/projectImages/' + project.imageName)}/>
//                   </div>
//                   <div className='projectText'>
//                       <div className='projectTitle'>{project.name}</div>
//                       <div className='projectDescription'>{project.description}</div>
//                       <div className='projectLinksContainer'>
//                         <a className='projectLink' href={project.demoLink}>DEMO</a>
//                         <a className='projectLink' href={project.githubLink}>GITHUB</a>
//                     </div>
//                     </div>
//                 </div>
//             )
//           })}  
//         </div>
//       </div>
//     )
//   }
// }

// export default Projects;
