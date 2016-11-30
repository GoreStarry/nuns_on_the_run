import React, {Component, PropTypes} from 'react';
import style from './MapBoard.scss';
import {VelocityComponent} from 'velocity-react';
import _find from 'lodash/find';

import church_map from '../../../../component/map.js';

const master_road = {
    free: 'white',
    blue: '#5bc0de',
    red: '#f30000',
    green: '#04f300',
    orange: '#f39200',
    purple: '#ae0ab1'
};

const vh = window.innerHeight;
const scale = vh / 54;

class MapBoard extends Component {

    constructor() {
        super();
    }

    render() {
        const {master_footprints, player_list} = this.props;
        return (
            <div className="MapBoard">
                <div className="box__map">
                    {master_footprints.map((master, index) => {
                        console.log(master);
                        const playerData = _find(player_list, (player) => {
                            return player._id == master._player;
                        })
                        const last_footprint = master.footprint[master.footprint.length - 1];
                        const last_position = last_footprint.position;
                        console.log(last_position);
                        const x = scale * church_map[last_position].position.x;
                        const y = scale * church_map[last_position].position.y;
                        return <VelocityComponent
                            animation={{
                            left: x,
                            bottom: y
                        }}
                            duration={1000}
                            key={master._id}>
                            <img
                                className="img__master"
                                style={{
                                border: `3px solid ${master_road[last_footprint.road || free]}`
                            }}
                                src={`/static/upload/mugshot/${playerData.name}.jpg`}
                                alt=""/>
                        </VelocityComponent>
                    })}
                </div>
            </div>
        );
    }
}

MapBoard.propTypes = {
    master_footprints: PropTypes.array,
    player_list: PropTypes.array
};

export default MapBoard;