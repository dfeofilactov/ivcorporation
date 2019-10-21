import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { Fade } from '@material-ui/core';
import Menu from './Menu';
import MainPage from './MainPage';
import InfoPage from './InfoPage';
import ErrorPage from '../ErrorPage';
// import classnames from 'classnames';
class Markup extends Component {
    render() {
        const { loading } = this.props;
        return (
            <Fade in={ !loading } timeout={ { exit: 800, enter: 400 } }>
                <div className='Markup'>
                    <Menu />
                    <Switch>
                        <Route exact path='/' render={ () => <MainPage /> } />
                        <Route exact path='/:name' render={ () => <InfoPage /> } />
                        <Route render={ () => <ErrorPage /> } />
                    </Switch>
                </div>
            </Fade>
        );
    }
}

Markup.propTypes = {
    loading: PropTypes.bool.isRequired,
    //
};

//Markup.defaultProps = {
//
//};

function select(store) {
    return {
        loading: store.viewReducer.loading,
        //
    };
}

export default connect(select)(Markup);
