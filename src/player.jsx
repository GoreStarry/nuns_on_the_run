import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './player/module/signin/login/Login.jsx';
import NunsCam from './player/module/signin/nuns_camera/NunsCam.jsx';
import SocketTest from './testC/SocketTest.jsx';

ReactDOM.render(
    <div>

    <Router history={browserHistory}>
        <Route path="/player/login/" component={Login}></Route>
        {/*
        <Route path="/socket" component={SocketTest}></Route>
        */}
        <Route path="/player/cam/:name" component={NunsCam}></Route>

    </Router>

</div>, document.getElementById('app'))