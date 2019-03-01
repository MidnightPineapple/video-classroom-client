import React, { Component } from 'react'

export default class MessengeInput extends Component {

    constructor() {
        super();
        this.state = {
            value: ""
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.value)
    }

    render() {

        const { onSubmit } = this.props
        const { value } = this.state

        return (
            <form className="message-input" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" 
                placeholder="Say..." 
                value={value}
                onChange={ e => this.setState({ value: e.target.value }) }
                />
                <button>Send</button>
            </form>
        )
    }

}