import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IMG_LOGO } from '../../consts/generalConsts';
// import classnames from 'classnames';
class LogoType extends Component {
    render() {
        return (
            <div className='LogoContain'>
                <div className='LogoIMG'>
                    <img src={ IMG_LOGO } alt='logo' />
                </div>
                <div className='LogoTextContain'>
                    <div className='LawyerName'>ІННА ВАСИЛІВСЬКА</div>
                    <div className='LawyerJob'>АДВОКАТ</div>
                </div>
            </div>
        );
    }
}

//LogoType.propTypes = {
//
//};

//LogoType.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(LogoType);
