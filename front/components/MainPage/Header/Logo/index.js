import React, { Component } from 'react';
import img2Src from '../../../../public/img/ivcorp.png';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import classnames from 'classnames';
class Logo extends Component {
    render() {
        return (
            <div className='Logo'>
                <img src={ img2Src } alt='' />
            </div>
        );
    }
}

//SomeComponent.propTypes = {
//
//};

//SomeComponent.defaultProps = {
//
//};

// function select(/* store */) {
//     return { };
// }

export default Logo;
