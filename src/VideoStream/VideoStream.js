import React, { Component } from 'react'
import { TwilioConnection } from '../lib/TwilioApi'
import Video from './Video'
import './VideoStream.css'

export default class VideoStream extends Component {

  constructor() {
    super()
    this.state = {
      connection: new TwilioConnection()
    }
  }

  render() {

    const { connection } = this.state

      return (
          <div className="videostream-container">

              <Video type="webcam" connection={connection} />
              <Video type="desktop" connection={connection} />
          </div>
      )
  }

}

// <Video videoSource = { Desktop } title="desktop" />
