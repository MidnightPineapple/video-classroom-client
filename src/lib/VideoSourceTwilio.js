const { connect, createLocalTracks } = require('twilio-video');

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzdkZjA3YjYyNjNhNWQxZmQxMjI0ZTc2NjJkYmFkMmM1LTE1NTQ2ODg4ODAiLCJpc3MiOiJTSzdkZjA3YjYyNjNhNWQxZmQxMjI0ZTc2NjJkYmFkMmM1Iiwic3ViIjoiQUNiMTEwZGE0MjIxMDRlZWVmN2M0MTI2NDBmNGFjZmEzMyIsImV4cCI6MTU1NDY5MjQ4MCwiZ3JhbnRzIjp7ImlkZW50aXR5IjoiVmlkZW9DbGFzc3Jvb20iLCJ2aWRlbyI6eyJyb29tIjoic2hpa2lSb29tIn19fQ.iofad57BO05FjbdMf92EHQ5DUt4FrJuuMBXCovwm3NA'
connect(token, { name: 'existing-room' }).then(room => {
  console.log(`Successfully joined a Room: ${room}`);
  room.on('participantConnected', participant => {
    console.log(`A remote Participant connected: ${participant}`);
  });
}, error => {
  console.error(`Unable to connect to Room: ${error.message}`);
});
