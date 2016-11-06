import React, {Component, PropTypes} from 'react';

import style from './Camera.scss';

const view_width = window.innerWidth;
const view_height = window.innerHeight;

class Camera extends Component {

    constructor(props) {
        super(props);
        this.state = {
            now_step: 'take_photo', // take_photo, confirm, done
            video_width: undefined,
            video_height: undefined
        }
    }

    static propTypes = {
        cover_img: PropTypes.string.isRequired,
        getImgCallBack: PropTypes.func.isRequired
    };

    componentDidMount() {

        var video = document.querySelector("#videoElement");
        video.addEventListener('loadeddata', () => {
            // alert(video.videoWidth); alert(video.videoHeight);
            const canvas_height = (view_width / video.videoWidth) * video.videoHeight;
            this.setState({
                video_width: video.videoWidth,
                video_height: video.videoHeight,
                canvas_height
            }, () => {
                v = document.getElementById('videoElement');
                canvas = document.getElementById('canvas');
                context = canvas.getContext('2d');
                w = canvas.width;
                h = canvas.height;
            });

        }, false);
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

        if (navigator.getUserMedia) {
            navigator.getUserMedia({
                video: true
            }, handleVideo, videoError);
        }

        function handleVideo(stream) {
            video.src = window
                .URL
                .createObjectURL(stream);
        }

        function videoError(e) {
            // do something
        }
        var v,
            canvas,
            context,
            w,
            h;
        var photo_confirm = document.getElementById('photo_confirm'); // get reference to img tag

        // document.addEventListener('DOMContentLoaded', function () {     // when DOM
        // loaded, get canvas 2D context and store width and height of element },
        // false);

        var sel = document.getElementById('fileselect'); // get reference to file select input element
        var cover_img = document.getElementById('img_cover');
        // cover_img.src = this.props.cover_img;
        const draw = (v, c, w, h) => {
            if (v.paused || v.ended) 
                return false; // if no video, exit here
            context.drawImage(v, 0, 0, w, h); // draw video feed to canvas

            const {canvas_height} = this.state;

            const cover_img_size = canvas_height > canvas.width
                ? canvas.width
                : canvas_height;

            context.drawImage(cover_img, canvas.width / 2 - cover_img_size / 2, canvas.height / 2 - cover_img_size / 2, cover_img_size, cover_img_size);

            var uri = canvas.toDataURL("image/png"); // convert canvas to data URI

            photo_confirm.src = uri; // add URI to IMG tag src
        }

        document
            .getElementById('cover_save')
            .addEventListener('click', (e) => {
                draw(v, context, w, h); // when save button is clicked, draw video feed to canvas
                this.setState({now_step: 'confirm'});
            });

        // for iOS create file reader
        var fr;

        sel.addEventListener('change', function (e) {
            var f = sel.files[0]; // get selected file (camera capture)

            fr = new FileReader();
            fr.onload = receivedData; // add onload event

            fr.readAsDataURL(f); // get captured image as data URI
        })

        function receivedData() {
            // readAsDataURL is finished - add URI to IMG tag src
            photo_confirm.src = fr.result;
        }

    }

    confirmClick = () => {
        console.log('confirm');
        this
            .props
            .getImgCallBack();
    }

    render() {
        const {cover_img} = this.props;
        const {video_width, video_height, canvas_height, now_step} = this.state;

        return (
            <div className="Camera">
                <h1>登記成為見習修女</h1>
                <div
                    className="box__video"
                    style={now_step == "take_photo"
                    ? {}
                    : {
                        display: 'none'
                    }}>
                    <video autoPlay="true" id="videoElement"></video>
                    <div
                        className="box__cover"
                        style={{
                        backgroundImage: `url(${cover_img})`
                    }}></div>
                    <img id="img_cover" src={cover_img} alt="" className="img__cover"/>
                    <input type="button" value="Save" id="cover_save"/>
                </div>

                <div className="box__confirm">
                    <img id="photo_confirm" src="" alt="capture"/>
                    <button className="btn__confirm" onClick={this.confirmClick}>確定</button>
                </div>

                <input id="fileselect" type="file" accept="image/*" capture="camera"></input>
                <canvas id="canvas" width={view_width} height={canvas_height}></canvas>
            </div>
        );
    }
}

export default Camera;