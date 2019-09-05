import React, { Component } from 'react';
import Menu from '../Menu';
import imgSrc from '../../../public/img/main3.jpg';

// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import classnames from 'classnames';
class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <img src={ imgSrc } alt='bla' />
                <Menu />
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
