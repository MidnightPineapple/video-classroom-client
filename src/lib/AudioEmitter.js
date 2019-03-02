import io from './io'

const SAMPLE_RATE = 250 // in milliseconds per sample

export default class AudioEmitter {
    
    constructor(audioSource) {
        audioSource(
            this.handleError.bind(this),
            this.handleStream.bind(this)
        )
        this.context = new AudioContext()
    }

    handleStream(stream) {
        const mediaRecorder = new MediaRecorder(stream)
        const audioChunks = []

        mediaRecorder.ondataavailable = event => {
            audioChunks.push(event.data)
        }
        
        mediaRecorder.onstop = () => {
            const reader = new FileReader()
            reader.onloadend = () => {
                io.socket.post(io.AUDIO_ROUTE, { audio: reader.result })
            }
            reader.readAsDataURL(audioChunks.pop())
        }

        setInterval(() => {
            if(mediaRecorder.state !== "inactive") mediaRecorder.stop()
            mediaRecorder.start()
        }, SAMPLE_RATE)
    }

    handleError(e) {
        throw e
    }

}


/**
 * 
 * start recording 
 * await ondataavailable --> push event.data into audiochunks
 * await onstop --> create file reader 
 *      await onloadend
 *      
 * 
 */