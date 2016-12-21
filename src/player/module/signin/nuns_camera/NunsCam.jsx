import React, {Component} from 'react';

import axios from 'axios';

import Camera from '../../../../components/camera/Camera.jsx';

class NunsCam extends Component {
    componentDidMount() {
        console.log(this.props.params.name);
    }

    getImgCallBack = (dataUrl) => {
        console.log(name);
        axios
            .post('/api/player/upload_mugshot/', {
            name: this.props.params.name,
            data_url: dataUrl
        })
            .then((res) => {
                console.log(res.data);
                alert('上傳成功');
                window.location = "/player/login/";
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <Camera
                cover_img={require('./images/nuns_mask.png')}
                getImgCallBack={this.getImgCallBack}></Camera>
        );
    }
}

export default NunsCam;