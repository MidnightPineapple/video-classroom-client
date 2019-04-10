import { createLocalTracks } from 'twilio-video'

export default (twilioConnection, videoElement) => {

  createLocalTracks({
    audio: true,
    video: { width: 640 }
  }).then( localTracks => {

    localTracks.find( t => t.kind === "video" ).attach(videoElement)

    return twilioConnection.connect({
      name: "videostream",
      tracks: localTracks
    })
  })
}
