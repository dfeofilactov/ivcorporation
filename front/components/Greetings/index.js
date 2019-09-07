import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

// import classnames from 'classnames';
class Greetings extends Component {
    render() {
        const { dict } = this.props;
        return (
            <div className='Greetings'>
                <div className='HelloText'>
                    <div className='LegalServiceText'>
                        { dict.translate('Greetings.LegalServiceText') }
                    </div>
                    <div className='SloganText'>
                        { dict.translate('Greetings.Slogan') }
                    </div>
                </div>
            </div>
        );
    }
}

Greetings.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    dict: PropTypes.object.isRequired,
};
//SomeComponent.propTypes = {
//
//};

//SomeComponent.defaultProps = {
//
//};

function select(store) {
    return {
        // lang: store.viewReducer.lang,
        dict: store.viewReducer.dict,
    };
}

export default withRouter(connect(select)(Greetings));
