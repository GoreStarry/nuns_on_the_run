import React, {Component} from 'react';
import axios from 'axios';
import timeago from 'timeago.js';
import 'bootstrap/dist/css/bootstrap.min.css';

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
import {AvForm, AvField} from 'availity-reactstrap-validation';

var today = new timeago();

class RoomSet extends Component {

    constructor() {
        super();
        this.state = {
            rooms: []
        }
    }

    componentDidMount() {
        this.getRoomList();
    }

    getRoomList() {
        axios
            .get('/api/admin/get_room_list/')
            .then((res) => {
                console.log(res.data);
                res
                    .data
                    .map((room) => {
                        // var formatTime = new timeago(room.createAt);

                        room.timeago = today.format(room.createAt, 'zh_TW')
                    })
                this.setState({rooms: res.data});
            })
            .catch((err) => {
                console.log(err);
            })
    }

    handleValidSubmit = (event) => {
        const room_name = document
            .getElementById('input__room_name')
            .value;
        if (room_name) {
            axios
                .post('/api/admin/create_room/', {name: room_name})
                .then((res) => {
                    this.getRoomList();
                })
                .catch(() => {})
        }
    }

    handleInvalidSubmit() {
        console.log('error');
    }

    onClinkEnter = (room_id) => {
        window.location = `/admin/prepare/${room_id}`;
    };

    render() {

        const {rooms} = this.state;
        return (
            <Container>
                <Row>
                    <Col sm="6">
                        <h1>Room Set</h1>
                        <AvForm
                            onValidSubmit={this.handleValidSubmit}
                            onInvalidSubmit={this.handleInvalidSubmit}>
                            <FormGroup>
                                <InputGroup>
                                    <AvField
                                        id="input__room_name"
                                        name="input__room_name"
                                        type="text"
                                        placeholder="room name..."
                                        minLength="2"/>
                                    <InputGroupButton>
                                        <Button>Create</Button>
                                    </InputGroupButton>
                                </InputGroup>
                            </FormGroup>
                        </AvForm>
                    </Col>
                </Row>
                <Row>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Room Name</th>
                                <th>Create At</th>
                                <th>round</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {rooms.map((room, index) => {
                                return <tr key={room._id}>
                                    <th scope="row">{index}</th>
                                    <td>{room.roomName}</td>
                                    <td>{room.timeago}</td>
                                    <td>{room.round}</td>
                                    <td>
                                        <Button color="primary" onClick={() => this.onClinkEnter(room._id)}>Enter</Button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </Row>
            </Container>

        );
    }
}

export default RoomSet;