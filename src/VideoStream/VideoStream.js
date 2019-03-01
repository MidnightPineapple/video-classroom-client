import React, { Component } from 'react'
import Video from './Video'
import './VideoStream.css'
import { Desktop, Webcam } from '../lib/VideoSources'

export default class VideoStream extends Component {

    render() {
        return (
            <div className="videostream-container">
                <Video videoSource = { Desktop } title="desktop" />
                <Video videoSource = { Webcam } title="webcam" />
            </div>
        )
    }

}