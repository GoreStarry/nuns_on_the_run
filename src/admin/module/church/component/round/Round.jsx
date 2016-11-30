import React, {Component, PropTypes} from 'react';
import style from './Round.scss';

class Round extends Component {
    render() {
        return (
            <div className="Round">
                Round:
                <span>
                    {this.props.round}
                </span>
            </div>
        );
    }
}

Round.propTypes = {
    round: PropTypes.number
};

export default Round;