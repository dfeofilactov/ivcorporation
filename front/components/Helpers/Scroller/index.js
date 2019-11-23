import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Component } from 'react';
import { connect } from 'react-redux';
import ReactScroller from 'react-custom-scrollbars';

import {
    SET_MENU_SCROLLED,
    RESET_MENU,
    // SET_MENU_DARK,
} from '../../../redux/actions/actions';

class Scroller extends Component {
    constructor(props) {
        super(props);

        this.state = {
            thumbGrab: false,
            //
        };
    }
    // componentDidUpdate(prevProps) {
    //     const { pos } = this.props;
    //     if (prevProps.pos !== pos) {
    //         this.Scroller.scrollTop(pos);
    //     }
    // }
    // onThumbMouseUp = () => {
    //     this.setState({ thumbGrab: false });
    // };
    // onThumbMouseDown = () => {
    //     this.setState({ thumbGrab: true });
    // };
    handleScroll = (e) => {
        const { scrollTop } = e.target;
        const {
            MenuScrolled,
            // scrollPoints,
            // isMenuDark,
        } = this.props;

        if (scrollTop === 0) this.props.dispatch(RESET_MENU());
        else if (!MenuScrolled) this.props.dispatch(SET_MENU_SCROLLED());

        // let isDark = isMenuDark;
        // _.forEach(scrollPoints, (point) => {
        //     if (scrollTop > point.top) isDark = point.isDark;
        // });
        // if (isMenuDark !== isDark) this.props.dispatch(SET_MENU_DARK(isDark));
    };
    render() {
        const { thumbGrab } = this.state;

        return (
            <ReactScroller
                ref={ el => this.Scroller = el }
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
                {this.props.children}
            </ReactScroller>
        );
    }
}

Scroller.propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func.isRequired,
    MenuScrolled: PropTypes.bool.isRequired,
    pos: PropTypes.number,
    scrollPoints: PropTypes.array.isRequired,
    isMenuDark: PropTypes.bool.isRequired,
    //
};

Scroller.defaultProps = {
    children: [],
    pos: 0,
    //
};

function select(store) {
    return {
        // lang: store.viewReducer.lang,
        dict: store.viewReducer.dict,
        MenuScrolled: store.viewReducer.MenuScrolled,
        pos: store.viewReducer.ScrollPos,
        scrollPoints: store.viewReducer.scrollPoints,
        isMenuDark: store.viewReducer.isMenuDark,
    };
}

export default connect(select)(Scroller);
