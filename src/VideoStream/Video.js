import React, { Component } from 'react'
import VideoEmitter from '../lib/VideoEmitter';

export default class Video extends Component {

    constructor() {
        super()

        this.video = React.createRef()
        this.canvas = React.createRef()

    }

    componentDidMount() {

        const { videoSource } = this.props

        if(videoSource) {
            new VideoEmitter(videoSource, this.video.current, this.canvas.current)
        }
    }

    render() {
        return (
            <div className="video-wrapper">
                <video autoPlay ref={this.video}/>
                <canvas ref={this.canvas} style={{display:"none"}}/>
            </div>
        )
    }

}