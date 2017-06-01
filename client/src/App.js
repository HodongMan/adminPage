import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Login, Line, Circle } from './components'


class App extends Component {

    render() {
        return (
            <div>
                <Line/>
                <Circle/>
            </div>
        );
    }
}

export default App;
