import React, {Component, PropTypes} from 'react';

import style from './Camera.scss';

const view_width = window.innerWidth;
const view_height = window.innerHeight;

var canvas;

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
            // context.filter = "contrast(200%)";
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

    }

    cancelClick = () => {
        console.log('cancel');
        this.setState({now_step: 'take_photo'});
    }

    confirmClick = () => {
        console.log('confirm');
        const dataUrl = canvas.toDataURL("image/png");
        this
            .props
            .getImgCallBack(dataUrl);
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

                <div
                    className="box__confirm"
                    style={now_step == "confirm"
                    ? {}
                    : {
                        display: 'none'
                    }}>
                    <img id="photo_confirm" src="" alt="capture"/>
                    <button className="btn__cancel" onClick={this.cancelClick}>取消</button>
                    <button className="btn__confirm" onClick={this.confirmClick}>確定</button>
                </div>

                <canvas id="canvas" width={view_width} height={canvas_height}></canvas>
            </div>
        );
    }
}

export default Camera;