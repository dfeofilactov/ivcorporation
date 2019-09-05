import React, { Component } from 'react';
import Logo from './Logo';
import MenuBar from './MenuBar/MenuBar';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import classnames from 'classnames';
class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <Logo />
                <MenuBar />
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

export default Header;
