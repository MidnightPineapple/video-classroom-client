const io = require('sails.io.js')(require('socket.io-client'));

io.SERVER_URL = 'http://localhost:1337'

io.VIDEO_ROUTE = '/video/emitvideo'
io.SCREEN_ROUTE = '/video/stream'
io.VIDEO_SUBSCRIBE_ROUTE = '/video/sub'

io.MESSAGE_SUBSCRIBE_ROUTE = "/message/sub"
io.MESSAGE_ROUTE = "/message"

io.MESSAGE_EVENT = "message"
io.SCREEN_EVENT = "screenevent"
io.VIDEO_EVENT = "videoevent"

io.sails.url = io.SERVER_URL

export default io