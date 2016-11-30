import React, {Component, PropTypes} from 'react';
import style from './ReplayMapBoard.scss';
import {VelocityComponent} from 'velocity-react';
import _find from 'lodash/find';
import church_map from '../../../../component/map.js';

const vh = window.innerHeight;
const scale = vh / 54;

class ReplayMapBoard extends Component {

    constructor() {
        super();
    }

    render() {
        const {round_master, round_junior, master_footprints, juniro_footprints} = this.props;
        return (
            <div className="ReplayMapBoard">
                <div className="box__map">
                    {master_footprints.map((master, index) => {
                        let now_position,
                            x,
                            y;
                        try {
                            now_position = master.footprint[round_master].position;
                            x = scale * church_map[now_position].position.x
                            y = scale * church_map[now_position].position.y
                        } catch (err) {
                            now_position = false;
                        }
                        return now_position && <VelocityComponent
                            animation={{
                            left: x,
                            bottom: y
                        }}
                            duration={1000}
                            key={master._id}>
                            <img
                                className="img__master"
                                src={`/static/upload/mugshot/${master._player.name}.jpg`}
                                alt=""/>
                        </VelocityComponent>
                    })}

                    {juniro_footprints.map((juniro, index) => {
                        let now_position,
                            x,
                            y;
                        try {
                            now_position = juniro.footprint[round_junior].position;
                            x = scale * church_map[now_position].position.x
                            y = scale * church_map[now_position].position.y
                        } catch (err) {
                            now_position = false;
                        }
                        return now_position && <VelocityComponent
                            animation={{
                            left: x,
                            bottom: y
                        }}
                            duration={1000}
                            key={juniro._id}>
                            <img
                                className="img__junior"
                                src={`/static/upload/mugshot/${juniro._player.name}.jpg`}
                                alt=""/>
                        </VelocityComponent>
                    })}
                </div>
            </div>
        );
    }
}

ReplayMapBoard.propTypes = {
    round_master: PropTypes.number,
    round_junior: PropTypes.number,
    master_footprints: PropTypes.array,
    juniro_footprints: PropTypes.array
};

export default ReplayMapBoard;