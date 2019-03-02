const io = require('sails.io.js')(require('socket.io-client'));

// io.SERVER_URL = 'https://agile-peak-85163.herokuapp.com'
io.SERVER_URL = "http://localhost:1337"

io.VIDEO_ROUTE = '/video/emitvideo'
io.SCREEN_ROUTE = '/video/stream'
io.AUDIO_ROUTE = '/video/audio'
io.VIDEO_SUBSCRIBE_ROUTE = '/video/sub'

io.MESSAGE_SUBSCRIBE_ROUTE = "/message/sub"
io.MESSAGE_ROUTE = "/message"

io.MESSAGE_EVENT = "message"
io.SCREEN_EVENT = "screenevent"
io.VIDEO_EVENT = "videoevent"
io.AUDIO_EVENT = "audioevent"

io.sails.url = io.SERVER_URL

io.socket.get(io.VIDEO_SUBSCRIBE_ROUTE)
io.socket.get(io.MESSAGE_SUBSCRIBE_ROUTE)

export default io