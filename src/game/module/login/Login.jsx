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
    Input,
    Table,
    Button
} from 'reactstrap';

import {AvForm, AvField} from 'availity-reactstrap-validation';

class Login extends Component {

    handleValidSubmit = () => {

        const player_name = document
            .getElementById('input__player_name')
            .value;
        if (player_name) {
            axios
                .post('/api/game/player_login/', {name: player_name})
                .then((res) => {
                    console.log(res);
                    var player_id = res.data.player_id;
                    localStorage.setItem('player_id', player_id)
                    if (res.data.room.ready) {
                        console.log(res.data.room.masterList);
                        var rule = res
                            .data
                            .room
                            .masterList
                            .indexOf(player_id) == -1
                            ? window.location = `/game/footprint_player/${res.data.room._id}`
                            : window.location = `/game/footprint_master/${res.data.room._id}`
                    } else {
                        window.location = `/game/prepare/${res.data.room._id}`
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    handleInvalidSubmit() {
        console.log('error');
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <Container>
                    <Row>
                        <Col>
                            <AvForm
                                onValidSubmit={this.handleValidSubmit}
                                onInvalidSubmit={this.handleInvalidSubmit}>
                                <FormGroup>
                                    <InputGroup>
                                        <AvField
                                            id="input__player_name"
                                            name="input__player_name"
                                            type="text"
                                            placeholder="Player Name..."
                                            minLength="2"/>
                                        <InputGroupButton>
                                            <Button>Login</Button>
                                        </InputGroupButton>
                                    </InputGroup>
                                </FormGroup>
                            </AvForm>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

Login.propTypes = {};

export default Login;