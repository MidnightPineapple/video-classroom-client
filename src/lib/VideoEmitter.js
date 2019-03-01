import io from './io';

io.socket.get(io.VIDEO_SUBSCRIBE_ROUTE)

export default class VideoEmitter {

    constructor(videoSource, video, canvas) {
        this.video = video
        this.context = canvas.getContext('2d')
        this.context.height = canvas.height
        this.context.width = canvas.width
        videoSource(this.handleError.bind(this), this.handleStream.bind(this))
        

        setInterval(() => {
            this.context.drawImage(video, 0, 0, this.context.width, this.context.height)
            
            const route = videoSource.type === "desktop" 
            ? io.SCREEN_ROUTE
            : io.VIDEO_ROUTE

            io.socket.post(route, { video: canvas.toDataURL('image/webp') })
        }, 5)
    }

    handleStream(stream) {
        this.video.srcObject = stream;
    }

    handleError(error) {
        throw error;
    }

}