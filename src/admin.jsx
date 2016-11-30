import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import RoomSet from './admin/module/room_set/RoomSet.jsx';
import Preparation from './admin/module/preparation/Preparation.jsx';
import Church from './admin/module/church/Church.jsx';
import Replay from './admin/module/replay/Replay.jsx';

ReactDOM.render(
    <div>
    <Router history={browserHistory}>
        <Route path="/admin/" component={RoomSet}></Route>
        <Route path="/admin/prepare/:room_id" component={Preparation}></Route>
        <Route path="/admin/church/:room_id" component={Church}></Route>
        <Route path="/admin/replay/:room_id" component={Replay}></Route>
    </Router>
</div>, document.getElementById('app'))