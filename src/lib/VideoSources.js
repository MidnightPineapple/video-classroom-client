import { desktopCapturer } from 'electron'

export function Webcam(handleError, handleStream) {

    navigator.mediaDevices.getUserMedia({
        video: {
            width: 1280,
            height: 720,
        },
        audio: false
    }).then(
        handleStream
    ).catch(
        handleError
    )

}

Webcam.type = "webcam"

export function Desktop(handleError, handleStream) {
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

Desktop.type = 'desktop'