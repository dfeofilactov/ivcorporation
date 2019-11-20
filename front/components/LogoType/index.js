import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { IMG_LOGO } from '../../consts/generalConsts';

class LogoType extends Component {
    render() {
        const { isMenuDark } = this.props;
        return (
            <div className={ classnames('LogoType', { 'dark': isMenuDark }) }>
                <div className='LogoIMG'>
                    <img src={ IMG_LOGO } alt='logo' />
                </div>
                <div className='LogoTextContain'>
                    <div className='AdvocatName'>ІННА ВАСИЛІВСЬКА</div>
                    <div className='AdvocatJob'>АДВОКАТ</div>
                </div>
            </div>
        );
    }
}

LogoType.propTypes = {
    isMenuDark: PropTypes.bool.isRequired,
    //
};

//LogoType.defaultProps = {
//
//};

function select(store) {
    return {
        isMenuDark: store.viewReducer.isMenuDark,
        //
    };
}

export default connect(select)(LogoType);
