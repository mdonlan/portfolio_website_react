import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

const projects = [
	{
		name: 'Twitch App',
		desc: "A reimplementation of the Twitch.tv website made using the Twitch public API. Watch streams, follow your favorites, and discover new content!",
		tech: "Vue, Vuex, Webpack",
		demoLink: 'https://mdonlan.github.io/twitch_tv_app/#/',
		githubLink: 'https://github.com/mdonlan/twitch_tv_app',
		imageName: 'twitch_app.PNG',
	},
	{
		name: 'Tv Tracker',
		desc: "Track your favorite shows and use the weekly tracker to make sure you always know when a new episode is on.",
		tech: "React, Redux, Styled Components, Webpack",
		demoLink: 'https://mdonlan.github.io/tvApp/',
		githubLink: 'https://github.com/mdonlan/tvApp',
		imageName: 'tvAppImg.PNG',
	},
	{
		name: 'Todo App',
		desc: "Keep track of all your todo lists. Organize your todos by lists and cross them off as you complete them.",
		tech: "React, Redux, Webpack",
		demoLink: 'https://mdonlan.github.io/react_todo/',
		githubLink: 'https://github.com/mdonlan/react_todo',
		imageName: 'react_todo.PNG',
	}
]

export function Projects() {
	return (
		<Wrapper className="projects_page">
			<Fade top>
				<Title>Projects and Experiments</Title>
			</Fade>
			<Container>
				{projects.map((project, i) => { 
					return (
						<Project i={i} key={project.name}>
							<Project_Image src={require('../assets/projectImages/' + project.imageName)}/>
							<Project_Text>
								<Project_Title>{project.name}</Project_Title>
								<Project_Desc>{project.desc}</Project_Desc>
								<Project_Tech>{project.tech}</Project_Tech>
								<Project_Links>
									<Link href={project.demoLink}>DEMO</Link>
									<Link href={project.githubLink}>GITHUB</Link>
								</Project_Links>
							</Project_Text>
						</Project>
					)
				})}  
			</Container>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	background: #111111;
	background-image: url("https://www.transparenttextures.com/patterns/maze-black.png");
	padding-top: 5%;
	padding-bottom: 5%;
`

const Title = styled.div`
	font-size: 32px;
	margin-bottom: 70px;
`

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	max-width: 2000px;
`

const Project = styled.div`
	display: flex;
	flex-direction: ${props => props.i % 2 == 0 ? "row" : "row-reverse"};
	margin-bottom: 40px;
	margin-top: 40px;
	width: 80%;
	padding: 20px;
	/* background: #222222; */
	/* border-radius: 5px; */
`

const Project_Image = styled.img`
	width: calc(50%);
	border: #333333 2px solid;
`

const Project_Title = styled.div`
	margin-bottom: 15px;
	text-align: center;
	font-size: 24px;
`

const Project_Text = styled.div`
	width: calc(50% - 50px);
	padding-left: 50px;
	display: flex; 
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Project_Desc = styled.div`
	margin-top: 15px;
	margin-bottom: 15px;
	width: 75%;
`

const Project_Tech = styled.div`
	margin-top: 15px;
	margin-bottom: 15px;
`

const Project_Links = styled.div`
	margin-top: 15px;
	margin-bottom: 15px;
	width: 100%;
	display: flex;
	justify-content: space-around;
`

const Link = styled.a`
	text-decoration: none;
	margin-left: 3px;
	margin-right: 3px;
	padding-bottom: 3px;
	width: 80px;
	text-align: center;
	position: relative;
	color: #ddddddb2;

	:hover {
		color: #dddddd;
	}

	:after {
		border-bottom: 1px solid #dddddd;
		content: '';
		position: absolute;
		height: 2px;
		top: 100%;
		left: 0;
		width: 80px;
		transition: all 0.5s;
	}

	:hover:after {
		left: -20px;
		width: 120px;
	}
`