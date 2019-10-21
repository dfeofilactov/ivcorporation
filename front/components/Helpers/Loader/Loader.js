import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import anime from 'animejs';
import { Fade } from '@material-ui/core';
import { AppContext } from '../../../contexts/contexts';
// import LogoSVG from '../Logo/LogoSVG';

class Loader extends Component {
    constructor(props) {
        super(props);

        this.state = { aboved: 'i' };
        this.i = 0;

        this.setAbove = :: this.setAbove;
    }
    componentDidMount() {
        // const loaderContainer = document.getElementById('loader_container');
        const letterI = document.getElementById('letter_i');
        const letterV = document.getElementById('letter_v');
        const duration = 400;
        anime({
            targets: letterI,
            // translateY: '-100px',
            opacity: '1',
            scale: '1.3',
            duration: 400,
            easing: 'easeInQuad',
            complete: () => {
                anime({
                    targets: letterI,
                    translateX: '-55px',
                    duration,
                    direction: 'alternate',
                    loop: true,
                    easing: 'easeInOutSine',
                });
            },
        });
        anime({
            targets: letterV,
            // translateY: '-100px',
            opacity: '1',
            scale: '1.3',
            duration: 400,
            easing: 'easeInQuad',
            complete: () => {
                anime({
                    targets: letterV,
                    translateX: '55px',
                    duration,
                    direction: 'alternate',
                    loop: true,
                    easing: 'easeInOutSine',
                    loopComplete: this.setAbove,
                });
            },
        });
        anime({
            targets: this.loadingText,
            translateY: '-20px',
            opacity: 0.4,
            delay: 800,
            duration: 400,
            easing: 'easeInQuad',
        });
    }
    setAbove() {
        this.i = this.i + 1;
        if (this.i % 2 === 1) this.setState({ aboved: this.state.aboved === 'i' ? 'v' : 'i' });
    }
    render() {
        const { loading } = this.props;
        const { aboved } = this.state;
        const { lang } = this.context;
        return (
            <Fade in={ loading }>
                <div
                    id='loader_container'
                    className='Loader'
                    onWheel={ e => e.preventDefault() }
                // className={ classnames('loader', { 'loader_start': this.props.loading }) }
                >
                    <div className='loaderLogo' id='loader'>
                        <div className={ classnames('loaderI', { 'aboved': aboved === 'i' }) } id='letter_i'>I</div>
                        <div className={ classnames('loaderV', { 'aboved': aboved === 'v' }) } id='letter_v'>V</div>
                    </div>
                    <div
                        ref={ el => this.loadingText = el }
                        className='loading_text'
                    >
                        {dict.translate('common.loading', lang)}
                    </div>
                </div>
            </Fade>
        );
    }
}

Loader.propTypes = {
    loading: PropTypes.bool.isRequired,
    //
};

Loader.contextType = AppContext;

function select(store) {
    return {
        loading: store.viewReducer.loading,
        //
    };
}

export default connect(select)(Loader);
