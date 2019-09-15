import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import classnames from 'classnames';
// import LogoSvg from '../../../public/logo.svg';

class Logo extends Component {
    render() {
        // const { size } = this.props;
        return (
            <div className='Logo'>
                <img src='https://live.staticflickr.com/65535/48701108292_210a00bb9d_o.png' alt='' />
            </div>
        );
    }
}

// Logo.propTypes = {
//     size: PropTypes.number.isRequired,
//     //
// };

//SomeComponent.defaultProps = {
//
//};

// function select(/* store */) {
//     return { };
// }

export default Logo;
