import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import KeyHandler, {KEYPRESS} from 'react-key-handler';

import ReplayMapBoard from './component/map_board/ReplayMapBoard.jsx';

import style from './Replay.scss';

class Replay extends Component {

    constructor() {
        super();
        this.state = {
            round_master: 0,
            round_junior: 0,
            juniro_footprints: [],
            master_footprints: []
        }
    }

    componentDidMount() {
        axios
            .post('/api/admin/replay_data', {room_id: this.props.params.room_id})
            .then((footprints) => {
                console.log(footprints);
                this.setState({juniro_footprints: footprints.data.juniors_footprint, master_footprints: footprints.data.masters_footprint});
            })
    }

    getFootPrint = () => {}

    nextMove = () => {
        const {round_master, round_junior} = this.state;
        if (round_master == round_junior) {
            this.setState({
                round_junior: round_junior + 1
            });
        } else {
            this.setState({
                round_master: round_master + 1
            });
        }
        console.log('next');
    }

    prevMove = () => {
        const {round_master, round_junior} = this.state;
        if (round_junior) {
            if (round_master !== round_junior) {
                this.setState({
                    round_junior: round_junior - 1
                });
            } else {
                this.setState({
                    round_master: round_master - 1
                });
            }
        }
        console.log('prev');
    }

    render() {
        const {round_master, round_junior, juniro_footprints, master_footprints} = this.state;
        return (
            <div>
                <h1>Round: {round_junior}</h1>
                <KeyHandler keyEventName={KEYPRESS} keyValue="w" onKeyHandle={this.prevMove}/>
                <KeyHandler keyEventName={KEYPRESS} keyValue="s" onKeyHandle={this.nextMove}/>
                <ReplayMapBoard
                    round_master={round_master}
                    round_junior={round_junior}
                    master_footprints={master_footprints}
                    juniro_footprints={juniro_footprints}/>
            </div>
        );
    }
}

Replay.propTypes = {};

export default Replay;