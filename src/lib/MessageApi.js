import io from './io'

export default class MessageApi {

    constructor() {
        io.socket.get(io.MESSAGE_SUBSCRIBE_ROUTE)
    }

    async get() {
        const response = await fetch(io.SERVER_URL+io.MESSAGE_ROUTE)
        const json = await response.json()
        return json;
    }

    async send(name, message) {
        const response = await fetch(io.SERVER_URL+io.MESSAGE_ROUTE, {
            method:"POST",
            body: JSON.stringify({ name, message })
        })

        const json = await response.json();

        return json;
    }

    listen(cb,ctx) {
        io.socket.on(io.MESSAGE_EVENT, cb.bind(ctx))
    }
}