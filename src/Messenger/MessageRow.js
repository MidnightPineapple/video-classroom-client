import React, { Component } from 'react'

export default class MessageRow extends Component {

    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div className="message-row">
                <p><b>{this.props.author}</b>: {this.props.message}</p>
            </div>
        )
    }

}