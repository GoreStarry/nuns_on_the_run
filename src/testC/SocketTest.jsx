import React, {Component} from 'react';

import ioClient from 'socket.io-client';

var io;

class SocketTest extends Component {
    componentDidMount() {
        io = ioClient.connect();
        io.on('connect', function () {
            console.log('連線成功');
        })
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default SocketTest;