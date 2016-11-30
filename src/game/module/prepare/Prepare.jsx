import React, {Component, PropTypes} from 'react';

class Prepare extends Component {

    componentDidMount() {
        const {io} = this.props.route, {room_id} = this.props.params,
            player_id = localStorage.getItem('player_id');

        io.emit('player_login', player_id)
        io.on('enter_church', (masters) => {
            console.log(`the masters are ${masters}`);
            if (~ masters.indexOf(player_id)) { // is in master list
                window.location = `/game/footprint_master/${room_id}`;
            } else {
                window.location = `/game/footprint_player/${room_id}`;
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Prepare</h2>
                <p>waiting for all players ready...</p>
                {/*
                <p>{this.props.params.room_id}</p>
                */}
            </div>
        );
    }
}

Prepare.propTypes = {};

export default Prepare;