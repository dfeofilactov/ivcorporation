import React, { Component } from 'react';
import Modules from '../../description/modules';
import MenuItem from './MenuItem';
import Language from './Language';
import Logo from './Logo';
// import Main from './Main';
// import Services from './Services';
// import Addition from './Addition';
// import Contacts from './Contacts';
// import Language from './Language';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import classnames from 'classnames';

class Menu extends Component {
    render() {
        return (
            <div className='Menu dark scrolled'>
                <Logo />
                <div className='menu_item_container'>
                    {
                        _.map(Modules, (item, key) => (
                            <MenuItem key={ key } item={ item } />
                        ))
                    }
                    <div className='divider' />
                    <Language />
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

export default Menu;
