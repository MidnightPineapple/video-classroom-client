import React, { Component } from 'react'
import MessageInput from './MessageInput'
import MessageDisplay from './MessageDisplay'
import "./Messenger.css"

import MessageApi from '../lib/MessageApi'

const messages = [
    { sender:"Lorem", message:"ipsum" },
]

export default class Messenger extends Component {

    constructor() {
        super();
        this.state = {
            messages
        }
    }

    componentDidMount() {
        this.api = new MessageApi()
        this.api.get().then( messages => this.setState({ messages }) )

        this.api.listen( newMsg => {
            const newMessages = this.state.messages.slice()
            newMessages.push(newMsg)

            this.setState({ messages: newMessages })
        })
    }

    sendMessage(message) {
        this.api.send("Instructor", message)
    }

    render() {
        return (
            <div className="messenger-container">
                <MessageDisplay messages = { this.state.messages } />
                <MessageInput onSubmit={this.sendMessage.bind(this)} />
            </div>
        )
    }

}