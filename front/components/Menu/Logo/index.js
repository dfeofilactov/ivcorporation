import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import classnames from 'classnames';
import { IMG_LOGO } from '../../../consts/generalConsts';

class Logo extends Component {
    render() {
        return (
            <div className='LogoContainer'>
                <img src={ IMG_LOGO } alt='logo' />
                <div className='LogoText'>
                    <div className='NameLogo'>ІННА ВАСИЛІВСЬКА</div>
                    <div className='AdvocatLogo'>АДВОКАТ</div>
                </div>
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
