import React from 'react'
import styled from 'styled-components'

export function Contact() {
	return (
		<Wrapper className="contact_page">
			<Title>Contact</Title>
			<Text>
				<div>Please feel free to contact me if you have any business inquiries or questions.</div>
				<p />
				<div>I am currently <Green href="mailto:me@michaeldonlan.com">available</Green> for work.</div>
				<p />
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
	padding-bottom: 100px;
`

const Title = styled.div`
	font-size: 32px;
	margin-bottom: 20px;
`

const Text = styled.div`
	max-width: 500px;
	text-align: center;
`

const Green = styled.a`
	color: #2bf786;
	border-bottom: 1px solid #2bf786;
	text-decoration: none;
`