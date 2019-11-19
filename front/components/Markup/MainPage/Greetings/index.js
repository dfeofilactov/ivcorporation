import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { IMG_GREETINGS_URL } from '../../../../consts/generalConsts';
// import { CLOSE_LOADER } from '../../../../redux/actions/actions';

// import classnames from 'classnames';
class Greetings extends Component {
    render() {
        const { dict } = this.props;
        return (
            <>
                <div className='backimg'>
                    <img
                        src={ IMG_GREETINGS_URL }
                        alt='background'
                        // onLoad={ () => this.props.dispatch(CLOSE_LOADER()) }
                    />
                </div>
                <div className='Greetings'>
                    <div className='hello_text'>
                        <div className='legal_service_text'>
                            { dict.translate('Greetings.LegalServiceText') }
                        </div>
                        <div className='slogan_text'>
                            { dict.translate('Greetings.Slogan') }
                        </div>
                    </div>
                </div>
            </>
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
