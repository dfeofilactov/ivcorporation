import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Modules from '../../description/modules';
import MenuItem from './MenuItem';
import Language from './Language';
import Logo from '../Helpers/Logo';
// import Main from './Main';
// import Services from './Services';
// import Addition from './Addition';
// import Contacts from './Contacts';
// import Language from './Language';

class Menu extends Component {
    render() {
        const { scrolled, selected } = this.props;
        return (
            <div className={ classnames('Menu', { 'scrolled': scrolled, 'dark': false }) }>
                <Logo />
                <div className='menu_item_container'>
                    <div className='menu_services'>
                        {
                            _.map(Modules, (item, key) => (
                                <MenuItem
                                    selected={ selected === key }
                                    key={ key }
                                    item={ item }
                                />
                            ))
                        }
                        <div className='divider' />
                    </div>
                    <Language />
                </div>
            </div>
        );
    }
}

Menu.propTypes = {
    scrolled: PropTypes.bool.isRequired,
    selected: PropTypes.number.isRequired,
    //
};

//SomeComponent.defaultProps = {
//
//};

function select(store) {
    return {
        scrolled: store.viewReducer.MenuScrolled,
        selected: store.viewReducer.MenuSelectedIndex,
        //
    };
}

export default connect(select)(Menu);
