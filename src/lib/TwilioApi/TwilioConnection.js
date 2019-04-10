import { connect } from 'twilio-video';

let url
if(process.env.NODE_ENV === "production") {
    url = 'https://agile-peak-85163.herokuapp.com'
} else {
    url = "http://localhost:1337"
}

export const getToken = () => fetch(url + '/video/token').then(x => x.text())

export default class TwilioConnection {

  constructor() {
    this.ready = false
    this.backlog = []
    getToken().then( token => {
      this.ready = true
      this.token = token
    }).then(this.onReady.bind(this))
  }

  onReady() {
    for( const callback of this.backlog ) {
      callback()
    }
  }

  async connect(config) {
    if(!this.ready) {
      return await new Promise( s => {
        this.backlog.push( x => {
          s(this.connect(config))
        })
      })
    }
    try {
      return await connect(this.token, config).then(room => {
        console.log(`Successfully joined a Room: ${room}`, config);
        room.on('participantConnected', participant => {
          console.log(`A remote Participant connected: ${participant}`);
        });
      })
    } catch (e) {
      console.log( "Error when connecting to the room: " + e.message)
    }
  }
}



/*

export const connectTwilio = function(token, connectConfig){
  return connect(token, connectConfig).then(room => {

    console.log(`Successfully joined a Room: ${room}`);

    room.on('participantConnected', participant => {

      console.log(`A remote Participant connected: ${participant}`);

    });
  }, error => {
    console.error(`Unable to connect to Room: ${error.message}`);
  });
}

// export default config => getToken().then(token => connectTwilio(token, config))


*/
