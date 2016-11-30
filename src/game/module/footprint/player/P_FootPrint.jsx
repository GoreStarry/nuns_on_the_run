import React, {Component, PropTypes} from 'react';
import axios from 'axios';

import style from './P_FootPrint.scss';

import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    InputGroup,
    InputGroupButton,
    InputGroupAddon,
    Input,
    Table,
    Button
} from 'reactstrap';

class P_FootPrint extends Component {

    constructor() {
        super();
        this.state = {
            footprints: [],
            round: false,
            player_id: false
        }
    }

    componentWillMount() {
        this.setState({
            player_id: localStorage.getItem('player_id'),
            room_id: this.props.params.room_id
        });
    }

    componentDidMount() {
        this.getOwnFootprint();
        this.getRoomData();
        const {io} = this.props.route, {room_id} = this.props.params,
            player_id = localStorage.getItem('player_id');

        io.on('go_next_round', (round) => {
            console.log(`update to round: ${round}`);
            this.getRoomData();
        })

    }

    getRoomData() {
        axios
            .post('/api/admin/room_data_basic', {room_id: this.props.params.room_id})
            .then((res_data) => {
                console.log(res_data);
                this.setState({
                    round: res_data.data.round,
                    junior_num: res_data.data.playerList.length - 2
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    getOwnFootprint() {
        const {player_id, room_id} = this.state;
        axios
            .post('/api/game/get_own_Jfootprint', {player_id, room_id})
            .then((res) => {
                res
                    .data
                    .footprint
                    .reverse();
                this.setState({footprints: res.data.footprint});
            })
            .catch((err) => {
                console.log(err);
            })
    }

    postPosition = () => {

        const position = document
            .getElementById('input__position')
            .value;
        if (position) {
            const {io} = this.props.route;
            const {player_id, room_id, round, junior_num} = this.state;
            const move_type = document
                .getElementById('select__move_type')
                .value;
            const event = document
                .getElementById('select__event')
                .value;

            axios
                .post('/api/game/push_next_Jstep', {
                player_id,
                room_id,
                round,
                move_type,
                event,
                position
            })
                .then((res) => {
                    console.log(res);
                    res
                        .data
                        .footprint
                        .reverse();
                    this.setState({footprints: res.data.footprint});
                    io.emit('footprint_update', {room_id, round, junior_num, player_id});
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    render() {
        const {footprints, round} = this.state;
        return (
            <div>
                <Container>
                    <Row>
                        <h1>P_FootPrint</h1>
                    </Row>
                    <Row>
                        <h3>目前回合：{round}</h3>
                    </Row >
                    <Row>
                        <InputGroup>
                            <InputGroupAddon>
                                <select id="select__move_type" aria-label="move type">
                                    <option value="run">跑</option>
                                    <option value="walk">走</option>
                                    <option value="sneak">躡</option>
                                    <option value="stand">停</option>
                                </select>
                            </InputGroupAddon>
                            <Input
                                id="input__position"
                                className="input__position"
                                type="number"
                                placeholder="移動位置..."/>
                            <InputGroupAddon>
                                <select id="select__event" aria-label="event">
                                    <option value="">無</option>
                                    <option value="key">鑰匙</option>
                                    <option value="wish">願望</option>
                                    <option value="caught">被抓</option>
                                    <option value="win">完成</option>
                                </select>
                            </InputGroupAddon>
                        </InputGroup>
                    </Row>
                    < Row >
                        <Button color="primary" size="lg" onClick={this.postPosition}>確定</Button>
                    </Row>
                    <Table>
                        <thead>
                            <tr>
                                <th>回合</th>
                                <th>移動</th>
                                <th>位置</th>
                                <th>事件</th>
                            </tr>
                        </thead>
                        {footprints.map((footprint, index) => {
                            return <tbody key={footprint.round}>
                                <tr>
                                    <th scope="row">{footprint.round}</th>
                                    <td>{footprint.move_type}</td>
                                    <td>{footprint.position}</td>
                                    <td>{footprint.event}</td>
                                </tr>
                            </tbody>
                        })
}
                    </Table>
                </Container>
            </div>
        );
    }
}
P_FootPrint.propTypes = {};

export default P_FootPrint;