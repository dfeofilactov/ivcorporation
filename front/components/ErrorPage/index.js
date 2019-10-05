import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IMG_GREETINGS_URL } from '../../consts/generalConsts';
// import classnames from 'classnames';
class ErrorPage extends Component {
    render() {
        return (
            <div className='ErrorPage'>
                <div className='backimg'>
                    <img src={ IMG_GREETINGS_URL } alt='background' />
                </div>
                <div className='error_code'>404</div>
                <div className='error_text'>
                    Page not found
                </div>
            </div>
        );
    }
}

//ErrorPage.propTypes = {
//
//};

//ErrorPage.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(ErrorPage);
