import React, { Component } from 'react'
import { connectVideo, connectScreen } from '../lib/TwilioApi'

export default class Video extends Component {

    constructor() {
        super()

        this.videoElement = React.createRef()

    }

    componentDidMount() {

        // const { videoSource } = this.props
        // if(videoSource) {
        //     new VideoEmitter(videoSource, this.video.current, this.canvas.current)
        // }

        const conn = this.props.connection

        if(this.props.type === "webcam") {
          connectVideo(conn, this.videoElement.current)
        } else if(this.props.type === "desktop") {
          connectScreen(conn, this.videoElement.current)
        }

    }

    render() {
        return (
            <div className="video-wrapper">
                <video autoPlay ref={this.videoElement}/>
            </div>
        )
    }

}
