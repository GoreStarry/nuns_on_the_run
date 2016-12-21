import React, {Component, PropTypes} from 'react';
import axios from 'axios';
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

import style from './M_FootPrint.scss';

class M_FootPrint extends Component {

    constructor() {
        super();
        this.state = {
            submit_active: false,
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

        // io.on('junior_ready', () => {})

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
                    submit_active: res_data.data.whoseTurn == 'Master',
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
            .post('/api/game/get_own_Mfootprint', {player_id, room_id})
            .then((res) => {
                res
                    .data
                    .footprint
                    .reverse();
                console.log(res.data.footprint);
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

            const road = document
                .getElementById('select__road')
                .value;

            axios
                .post('/api/game/push_next_Mstep', {
                player_id,
                room_id,
                round,
                move_type,
                event,
                position,
                road
            })
                .then((res) => {
                    console.log(res);
                    res
                        .data
                        .footprint
                        .footprint
                        .reverse();
                    this.setState({footprints: res.data.footprint.footprint});
                    if (res.data.round_done) {
                        this.setState({
                            round: round + 1
                        });
                        io.emit('next_round_ready', {room_id, round})
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    render() {
        const {footprints, round, submit_active} = this.state;

        return (
            <div className="M_FootPrint">
                <Container>
                    <Row>
                        <h1>M_FootPrint</h1>
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
                                <select id="select__road" aria-label="road">
                                    <option value="free">自由</option>
                                    <option value="blue">藍</option>
                                    <option value="red">紅</option>
                                    <option value="green">綠</option>
                                    <option value="orange">橘</option>
                                    <option value="purple">紫</option>
                                </select>
                            </InputGroupAddon>
                            <InputGroupAddon>
                                <select id="select__event" aria-label="event">
                                    <option value="">無</option>
                                    <option value="arrest">抓</option>
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

M_FootPrint.propTypes = {};

export default M_FootPrint;