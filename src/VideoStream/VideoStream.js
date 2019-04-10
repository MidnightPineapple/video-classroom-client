import React, { Component } from 'react'
import Video from './Video'
import './VideoStream.css'

export default class VideoStream extends Component {

    render() {
        return (
            <div className="videostream-container">

                <Video type="webcam" />
                <Video type="desktop" />
            </div>
        )
    }

}

// <Video videoSource = { Desktop } title="desktop" />
