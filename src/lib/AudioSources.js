export function Microphone(handleError, handleStream) {

    navigator.mediaDevices.getUserMedia({ audio:true, video:false })
    .then( handleStream )
    .catch( handleError )

}

Microphone.type = "microphone"