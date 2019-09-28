import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MenuItem from './MenuItem';
import Language from './Language';
import LogoType from '../LogoType';
import MenuDescription from '../../description/menu';
import { MENU_TYPE_ELEMENT } from '../../consts/generalConsts';
import MenuBoard from './MenuBoard';
// import Logo from './Logo';
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
                <LogoType />
                <div className='menu_item_container'>
                    <div className='menu_services'>
                        {
                            _.map(MenuDescription, (item, key) => {
                                if (item.menuType === MENU_TYPE_ELEMENT) {
                                    return (
                                        <MenuItem
                                            selected={ selected === key }
                                            key={ key }
                                            item={ item }
                                        />
                                    );
                                }
                                return (
                                    <MenuBoard
                                        key={ key }
                                        item={ item }
                                    />
                                );
                            })
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
