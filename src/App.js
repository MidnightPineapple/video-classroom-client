import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Messenger from './Messenger'
import VideoStream from './VideoStream'
const { connect, createLocalTracks } = require('twilio-video');

class App extends Component {

  componentDidMount(){
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzdkZjA3YjYyNjNhNWQxZmQxMjI0ZTc2NjJkYmFkMmM1LTE1NTQ4NTMzODkiLCJpc3MiOiJTSzdkZjA3YjYyNjNhNWQxZmQxMjI0ZTc2NjJkYmFkMmM1Iiwic3ViIjoiQUNiMTEwZGE0MjIxMDRlZWVmN2M0MTI2NDBmNGFjZmEzMyIsImV4cCI6MTU1NDg1Njk4OSwiZ3JhbnRzIjp7ImlkZW50aXR5IjoiUmFuZG9tUm9vbSIsInZpZGVvIjp7fX19.rj_fW-NB5Z1k97WNwz8QCsjTQ6Q0BWTiWCs5hmuhwLY'
    connect(token, { name: 'existing-room' }).then(room => {
      console.log(`Successfully joined a Room: "Cool Room"`);
      room.on('participantConnected', participant => {
        console.log(`A remote Participant connected: ${participant}`);
      });
    }, error => {
      console.error(`Unable to connect to Room: ${error.message}`);
    });

    createLocalTracks({
      audio: true,
      video: { width: 640 }
    }).then(localTracks => {
      return connect(token, {
        name: 'Shikis Room',
        tracks: localTracks
      });
    }).then(room => {
      console.log(`Connected to Room: ${room.name}`);
    });
  }

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
