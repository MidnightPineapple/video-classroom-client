import React, { Component } from 'react'
import Video from './Video'
import './VideoStream.css'
import { Desktop, Webcam } from '../lib/VideoSources'
import { Microphone } from '../lib/AudioSources';
import AudioEmitter from '../lib/AudioEmitter'

export default class VideoStream extends Component {

    componentDidMount() {
        const audio = new AudioEmitter(Microphone)
    }

    render() {
        return (
            <div className="videostream-container">
                <Video videoSource = { Desktop } title="desktop" />
                <Video videoSource = { Webcam } title="webcam" />
            </div>
        )
    }

}