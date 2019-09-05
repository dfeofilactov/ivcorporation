import { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import Scroller from 'react-custom-scrollbars';
// import Scroller from 'react-custom-scroll';
// import Scroller from 'react-perfect-scrollbar';

import { OPEN } from '../redux/actions/actions';
import Header from './MainPage/Header';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thumbGrab: false,
            //
        };
        this.onThumbMouseUp = :: this.onThumbMouseUp;
        this.onThumbMouseDown = :: this.onThumbMouseDown;
    }
    componentDidMount() {
        const isMobile = window.screen.width < 600;
        if (isMobile) console.log('[VERSION] MOBILE');
        else console.log('[VERSION] DESKTOP');
        window.onload = () => {
            _.delay(() => {
                this.props.dispatch(OPEN({ isMobile }));
            }, 1000);
        };
    }
    onThumbMouseUp() {
        console.log('mouse up');
        this.setState({ thumbGrab: false });
    }
    onThumbMouseDown() {
        console.log('mouse up');
        this.setState({ thumbGrab: true });
    }
    render() {
        // const { dict } = this.props;
        const { thumbGrab } = this.state;
        return (
            <div className='AppContainer'>
                <Scroller
                    className='Scroller'
                    renderThumbVertical={ props => (
                        <div
                            role='presentation'
                            className={ classnames('thumb', { 'grab': thumbGrab }) }
                            onMouseDown={ this.onThumbMouseDown }
                            onMouseUp={ this.onThumbMouseUp }
                            { ...props }
                        />
                    ) }
                    renderTrackVertical={ props => <div { ...props } className='track' /> }
                    /* heightRelativeToParent='100%' */
                >
                    <Header />
                </Scroller>
            </div>
        );
    }
}
App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    // dict: PropTypes.object.isRequired,
};

function select(store) {
    return {
        // lang: store.viewReducer.lang,
        dict: store.viewReducer.dict,
    };
}

export default withRouter(connect(select)(App));
