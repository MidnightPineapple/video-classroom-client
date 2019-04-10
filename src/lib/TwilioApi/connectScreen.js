import { LocalVideoTrack } from 'twilio-video'
import { desktopCapturer } from 'electron'


function getDesktop(handleError, handleStream) {
    desktopCapturer.getSources({ types: ['window', 'screen'] }, (error, sources) => {
        if (error) throw error

        const electron = sources.find( s => s.name === "Entire screen" )

        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                mandatory: {
                    chromeMediaSource: 'desktop',
                    chromeMediaSourceId: electron.id,
                    minWidth: 1280,
                    maxWidth: 1280,
                    minHeight: 720,
                    maxHeight: 720
                }
            }
        })
        .then(handleStream)
        .catch(handleError)
    })
}

export default (twilioConnection, videoElement) => {
  getDesktop(e => { throw e; }, function(stream) {


    const mediatrack = stream.getVideoTracks()[0]

    const screenTrack = new LocalVideoTrack(mediatrack)

    twilioConnection.connect({
      name:"screenshare",
      tracks: [ screenTrack ]
    })

    screenTrack.attach(videoElement)

    // BUG: did they join the same room?



  })
}
