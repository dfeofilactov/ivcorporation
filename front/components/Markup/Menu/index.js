import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MenuItem from './MenuItem';
import Language from './Language';
import LogoType from '../../LogoType';
import MenuDescription from '../../../description/menu';
import { MENU_TYPE_ELEMENT } from '../../../consts/generalConsts';
import MenuBoard from './MenuBoard';

class Menu extends Component {
    render() {
        const { scrolled, selected, isMenuDark } = this.props;
        return (
            <div className={ classnames('Menu', { 'scrolled': scrolled, 'dark': isMenuDark }) }>
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
                                        selected={ selected === key }
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
    isMenuDark: PropTypes.bool.isRequired,
    //
};

//SomeComponent.defaultProps = {
//
//};

function select(store) {
    return {
        scrolled: store.viewReducer.MenuScrolled,
        selected: store.viewReducer.MenuSelectedIndex,
        isMenuDark: store.viewReducer.isMenuDark,
        //
    };
}

export default connect(select)(Menu);
