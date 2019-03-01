import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Messenger from './Messenger'
import VideoStream from './VideoStream'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Messenger />
        <VideoStream />
      </div>
    );
  }
}

export default App;
