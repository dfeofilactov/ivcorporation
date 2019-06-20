import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
// import classnames from 'classnames';
import { OPEN } from '../redux/actions/actions';
import Header from './Header';
import Topic from './Topic';
import MainBody from './MainBody/index';
import Footer from './Footer';
import Menu from './Menu/index';

class App extends Component {
    componentDidMount() {
        const isMobile = window.screen.width < 600;
        if (isMobile) console.log('Using MOBILE version!');
        else console.log('Using DESKTOP version!');
        window.onload = () => {
            _.delay(() => {
                this.props.dispatch(OPEN({ isMobile }));
            }, 1000);
        };
    }
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <Switch>
                    <Route exact path='/' render={ () => <MainBody /> } />
                    <Route path='/topics/:topic' render={ ({ match: { params } }) => <Topic key={ params.topic } /> } />
                </Switch>
                <Footer />
            </div>
        );
    }
}
App.propTypes = {
    //
    dispatch: PropTypes.func.isRequired,
};

function select(store) {
    return {
        lang: store.viewReducer.userParams.lang,
        //
    };
}

export default withRouter(connect(select)(App));
