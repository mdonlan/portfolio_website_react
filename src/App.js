import React, { Component } from 'react';

import Projects from './components/Projects'
import Intro from './components/Intro'
import Contact from './components/Contact'
import About from './components/About'
import './App.css';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            imgLoaded: false
        }
    }

    setImgLoaded = () => {
        this.setState({ imgLoaded: true });
    }

    render() {
        return (
            <div className="App">
                <Intro setImgLoaded={this.setImgLoaded}/>
                {this.state.imgLoaded &&
                    <div>
                        <Projects/>
                        <About />
                        <Contact />
                    </div>
                }
            </div>
        );
    }
}

export default App;
