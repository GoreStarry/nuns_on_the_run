import React from 'react';
import ReactDOM from 'react-dom';
import Camera from './components/camera/Camera.jsx';
import 'normalize.css'

const getImgCallBack = () => {
    console.log('get');
}

ReactDOM.render(
    <div>
    {/*
             */}
    <Camera
        cover_img={require('./assets/logo.png')}
        getImgCallBack={getImgCallBack}></Camera>
</div>, document.getElementById('app'))