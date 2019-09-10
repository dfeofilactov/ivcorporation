import { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import Scroller from 'react-custom-scrollbars';
// import Scroller from 'react-custom-scroll';
// import Scroller from 'react-perfect-scrollbar';

import {
    OPEN,
    SET_MENU_SCROLLED,
    RESET_MENU,
} from '../redux/actions/actions';
import Greetings from './Greetings';
import Menu from './Menu';
import Services from './Services';
import Modules from '../description/modules';
import { SERVICE_TYPE } from '../consts/generalConsts';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thumbGrab: false,
            //
        };
        this.onThumbMouseUp = :: this.onThumbMouseUp;
        this.onThumbMouseDown = :: this.onThumbMouseDown;
        this.handleScroll = :: this.handleScroll;
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
    handleScroll(e) {
        const { scrollTop } = e.target;
        if (scrollTop === 0) this.props.dispatch(RESET_MENU());
        else this.props.dispatch(SET_MENU_SCROLLED());
    }
    render() {
        // const { dict } = this.props;
        const { thumbGrab } = this.state;
        return (
            <div className='AppContainer'>
                <Scroller
                    className='Scroller'
                    onScroll={ this.handleScroll }
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
                    <Menu />
                    <Greetings />
                    {
                        _.map(Modules, (item, key) => {
                            if (item.type === SERVICE_TYPE) {
                                return (
                                    <Services
                                        data={ item }
                                        key={ key }
                                    />
                                );
                            }
                            return null;
                        })
                    }
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
