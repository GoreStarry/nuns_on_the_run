import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ioClient from 'socket.io-client';

import style from './game.scss';

import Login from './game/module/login/Login.jsx';
import Prepare from './game/module/prepare/Prepare.jsx';
import M_FootPrint from './game/module/footprint/master/M_FootPrint.jsx';
import P_FootPrint from './game/module/footprint/player/P_FootPrint.jsx';

var io = ioClient.connect('/player');

io.on('connect', function () {
    console.log('連線成功');
})

ReactDOM.render(
    <div>

    <Router history={browserHistory}>
        <Route path="/game/login/" component={Login}></Route>
        <Route path="/game/prepare/:room_id" component={Prepare} io={io}></Route>
        <Route path="/game/footprint_player/:room_id" component={P_FootPrint} io={io}></Route>
        <Route path="/game/footprint_master/:room_id" component={M_FootPrint} io={io}></Route>
        {/*
        <Route path="/socket" component={SocketTest}></Route>
        */}
    </Router>

</div>, document.getElementById('app'))