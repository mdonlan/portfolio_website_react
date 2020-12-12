import React from 'react'
import { Projects } from './components/Projects'
import { Intro } from './components/Intro'
import { Contact } from './components/Contact'
import { About } from './components/About'
import styled from 'styled-components'

export function App() {
    return (
        <Wrapper>
            <Intro/>
            <Projects/>
            <About />
            <Contact />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    color: #dddddd;
`