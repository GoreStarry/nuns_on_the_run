import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import style from './PlayerList.scss';

class PlayerList extends Component {
    render() {
        const {player_list, online_list} = this.props;
        return (
            <div className="PlayerList">
                {player_list.map((player, index) => {
                    const palyerClass = classNames({
                        'box__player': true,
                        'online': ~ online_list.indexOf(player._id)
                    })
                    return <dev className={palyerClass} key={player._id}>
                        <img src={`/static/upload/mugshot/${player.name}.jpg`} alt=""/>
                        <span className="name">{player.name}</span>
                    </dev>
                })
}
            </div>
        );
    }
}

PlayerList.propTypes = {
    player_list: PropTypes.array.isRequired,
    online_list: PropTypes.array
};

export default PlayerList;