import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
// import classnames from 'classnames';

import { OPEN } from '../redux/actions/actions';

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
                { 'IV Corporation' }
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
