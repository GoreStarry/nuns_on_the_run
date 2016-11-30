import React, {Component, PropTypes} from 'react';
import ioClient from 'socket.io-client';
import axios from 'axios';
import classNames from 'classnames';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    InputGroup,
    InputGroupButton,
    Input,
    Table,
    Button
} from 'reactstrap';

import style from './preparation.scss';

class Preparation extends Component {

    constructor() {
        super();
        this.state = {
            room_state: false,
            master_checked: []
        }

        var socket = ioClient.connect('/stage');

        socket.on('connect', function () {
            console.log('連線成功');
        })
        socket.on('someone_login', (player) => {
            console.log(`someone_login: ${player}`);
            this.getRoomData();
        })
        socket.on('someone_disconnect', (player) => {
            console.log(`someone_disconnect: ${player}`);
            this.getRoomData();
        });
        this.socket = socket;
    }

    componentDidMount() {
        this.getRoomData();
    }

    onClickMaster = (player) => {
        const {master_checked} = this.state;
        if (!~ master_checked.indexOf(player) && master_checked.length < 2) { //add to master
            this.setState({
                master_checked: [
                    ...master_checked,
                    player
                ]
            })

        } else { // already in master
            this.setState({
                master_checked: master_checked.filter((master) => master !== player)
            })
        }
    };

    getRoomData = () => {
        axios
            .post('/api/admin/room_data/', {room_id: this.props.params.room_id})
            .then((res) => {
                console.log(res.data);
                this.setState({room_state: res.data});
            })
            .catch((err) => {
                console.log(err);
            })
    }

    onClickSubmit = () => {
        // send master list and start the game
        const room_id = this.props.params.room_id,
            masters = this.state.master_checked;
        axios
            .post('/api/admin/game_ready', {room_id, masters})
            .then((res) => {
                console.log(res);
                this
                    .socket
                    .emit('invite_player', masters);
                window.location = `/admin/charch/${room_id}`
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const {master_checked} = this.state;
        const {onlineList, playerList} = this.state.room_state;

        return (
            <div className="Preparation">
                <Container>
                    <Row>
                        <Col>
                            <h1>Preparation</h1>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Player</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {playerList && playerList.map((player, index) => {
                                        return <tr
                                            key={player._id}
                                            className={'box__player ' + classNames({
                                            'online': ~ onlineList.indexOf(player._id),
                                            'onMaster': ~ master_checked.indexOf(player._id)
                                        })}
                                            onClick={() => {
                                            this.onClickMaster(player._id)
                                        }}>
                                            <th scope="row">{index}</th>
                                            <td>
                                                <img
                                                    className="img_mugshot"
                                                    src={`/static/upload/mugshot/${player.name}.jpg`}
                                                    alt=""/> {player.name}
                                            </td>
                                        </tr>
                                    })}

                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                            <Button
                                color="primary"
                                size="lg"
                                onClick={this.onClickSubmit}
                                disabled={master_checked.length !== 2}>進入教堂</Button>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

Preparation.propTypes = {};

export default Preparation;