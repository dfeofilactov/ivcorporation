import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Menu from './Menu';
import MainPage from './MainPage';
import InfoPage from './InfoPage';
import ErrorPage from '../ErrorPage';
// import classnames from 'classnames';
class Markup extends Component {
    render() {
        return (
            <div className='Markup'>
                <Menu />
                <Switch>
                    <Route exact path='/' render={ () => <MainPage /> } />
                    <Route exact path='/services/:name' render={ () => <InfoPage /> } />
                    <Route render={ () => <ErrorPage /> } />
                </Switch>
            </div>
        );
    }
}

//Markup.propTypes = {
//
//};

//Markup.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(Markup);
