import React, {Component, PropTypes} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {AvForm, AvField} from 'availity-reactstrap-validation';

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

class Login extends Component {

    handleValidSubmit = () => {
        const player_name = document
            .getElementById('player_name')
            .value;
        console.log(player_name);
        axios
            .post('/api/player/login/', {name: player_name})
            .then((res) => {
                console.log(res.data);
                if (res.data.name) {
                    window.location = `/player/cam/${player_name}`;
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <Container>
                <Row>
                    <h1>玩家登入</h1>
                </Row>
                <Row>
                    <AvForm
                        onValidSubmit={this.handleValidSubmit}
                        onInvalidSubmit={this.handleInvalidSubmit}>
                        <AvField
                            id="player_name"
                            name="player_name"
                            label="玩家名稱："
                            type="text"
                            minLength="2"
                            required/>
                        <Button color="primary">Submit</Button>
                    </AvForm>
                </Row>
            </Container>
        );
    }
}

Login.propTypes = {};

export default Login;