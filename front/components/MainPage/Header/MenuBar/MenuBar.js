import React, { Component } from 'react';
import Main from './Main';
import Services from './Services';
import Addition from './Addition';
import Contacts from './Contacts';
import Language from './Language';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import classnames from 'classnames';

class MenuBar extends Component {
    render() {
        return (
            <div className='MenuBar'>
                <Main />
                <Services />
                <Addition />
                <Contacts />
                <Language />
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

export default MenuBar;
