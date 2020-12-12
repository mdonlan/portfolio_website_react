import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import scrollToElement from 'scroll-to-element'
import styled from 'styled-components'

export function Intro() {
    
    function handle_nav_click(e) {
        let targetElem;
        if(e.target.innerText === 'Projects') { targetElem = '.projects_page' }
        else if (e.target.innerText === 'About') { targetElem = '.about_page' }
        else if (e.target.innerText === 'Contact') { targetElem = '.contact_page' }
        scrollToElement(targetElem, { offset: 0, ease: 'outSine', duration: 1000 });
    }

    return (
        <Wrapper>
            <Fade top >
                <Greeting>Hi I'm Michael. I'm a web developer located in Portland, Maine.</Greeting>
                <Nav>
                    <Slide left>
                        <Nav_Button onClick={handle_nav_click}>Projects</Nav_Button>
                    </Slide>
                    <Slide bot>
                        <Nav_Button onClick={handle_nav_click}>About</Nav_Button>
                    </Slide>
                    <Slide right>
                        <Nav_Button onClick={handle_nav_click}>Contact</Nav_Button>
                    </Slide>
                </Nav>
            </Fade>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

const Greeting = styled.div`
    font-size: 24px;
`

const Nav = styled.div`
    display: flex;
`

const Nav_Button = styled.div`
    border: 1px solid #dddddd;
    margin: 5px;
    margin-top: 15px;
    padding: 15px;
    padding-left: 20px;
    padding-right: 20px;
    transition: all 0.2s;
    height: 20px;
    width: 75px;
    text-align: center;
    user-select: none;

    :hover {
        margin-top: 10px;
        background: #dddddd;
        color: #222222; 
        cursor: pointer;
    }
`