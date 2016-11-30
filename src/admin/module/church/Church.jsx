import React, {Component, PropTypes} from 'react';
import ioClient from 'socket.io-client';
import axios from 'axios';

import Round from './component/round/Round.jsx';
import PlayerList from './component/player_list/PlayerList.jsx';
import MapBoard from './component/map_board/MapBoard.jsx';
import style from './Church.scss';

import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

var io = ioClient.connect('/admin');

class Church extends Component {

    constructor() {
        super();
        this.state = {
            room_state: false,
            modal: false,
            master_footprints: []
        }

        var io = ioClient.connect('/stage');

        io.on('connect', function () {
            console.log('連線成功');
        })

        io.on('someone_ready', (player_id) => {})

        io.on('go_next_round', (round) => {
            console.log(`update to round: ${round}`);
            this.getRoomData();
        })

        this.socket = io;
    }

    componentWillMount() {
        // room init
        this.getRoomData();

        // master nuns init
    }

    componentDidMount() {}

    getRoomData = () => {
        axios
            .post('/api/admin/room_data/', {room_id: this.props.params.room_id})
            .then((res) => {
                this.setState({room_state: res.data.room_data, master_footprints: res.data.master_footprints});
            })
            .catch((err) => {
                console.log(err);
            })
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    gameOver = () => {
        axios
            .post('/api/admin/game_over', {room_id: this.props.params.room_id})
            .then((res) => {
                window.location = `/admin/replay/${this.props.params.room_id}`;
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const {room_state, master_footprints} = this.state;
        return (
            <div className="Church">
                {room_state.ready && <div>
                    <Round round={room_state.round}/>
                    <PlayerList
                        player_list={room_state.playerList}
                        online_list={room_state.onlineList}/>
                    <MapBoard
                        master_footprints={master_footprints}
                        player_list={room_state.playerList}/>
                    <Button className="btn__modal" color="danger" onClick={this.toggle}>X</Button>
                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}
                        className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Game Over</ModalHeader>
                        <ModalBody>
                            結束遊戲，到重播畫面。
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={this.gameOver}>確定結束</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>返回</Button>
                        </ModalFooter>
                    </Modal>
                </div>}

            </div>
        );
    }
}

Church.propTypes = {};

export default Church;