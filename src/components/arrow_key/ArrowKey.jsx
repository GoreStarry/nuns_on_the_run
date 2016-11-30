import React, {Component, PropTypes} from 'react';

class ArrowKey extends Component {

    confirmClick = () => {}

    cancelBack = () => {}

    render() {
        return (
            <div className="ArrowKey">
                <div className="box__button">
                    <div className="key__top"></div>
                    <div className="key__right"></div>
                    <div className="key__bottom"></div>
                    <div className="key__left"></div>
                </div>
            </div>
        );
    }
}

ArrowKey.propTypes = {
    confirmCallback: PropTypes.func.isRequired
};

export default ArrowKey;