import React from 'react'
import styled from 'styled-components'

export function About() {
	return (
		<Wrapper className="about_page">
			<Title>About Me</Title>
			<Text>
				Hi, I'm Michael. I graduated from Bentley University in 2015 with a degree in finance. 
				I started programming after college and decided to make it my career. 
				I mostly do web development but I also love making video games, both for the web and in Unity. 
				<p />
				I am a front-end developer and focus on using React and Vue to develop my websites.
			</Text>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #111111;
	padding-top: 50px;
`

const Title = styled.div`
	font-size: 32px;
	margin-bottom: 20px;
`

const Text = styled.div`
	max-width: 500px;
	text-align: center;
	/* line-height: 1.25em; */
`