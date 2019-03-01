import React, { Component } from 'react'
import MessageRow from './MessageRow'

export default class MessengeDisplay extends Component {

    render() {
        return (
            <div className="message-container">
                { 
                    this.props.messages.map((m,k) => 
                        <MessageRow author={m.name} message={m.message} key={k} />  
                    )
                }
            </div>
        )
    }

}