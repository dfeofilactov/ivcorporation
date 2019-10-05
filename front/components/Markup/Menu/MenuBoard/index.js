import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Paper, Fade,
    //
} from '@material-ui/core';
import classnames from 'classnames';

import BoardElement from './BoardElement';

class MenuBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            //
        };
    }
    render() {
        const { item, dict, selected } = this.props;
        const id = this.state.open ? 'popper' : null;
        return (
            <div
                className='menu_board'
                onFocus={ () => { } }
                onMouseOver={ this.openBoard }
                onMouseLeave={ this.closeBoard }
            >
                <div
                    className={ classnames('menu_item', 'menu_item_board', { 'selected': selected }) }
                    aria-describedby={ id }
                    ref={ elem => this.anchorEl = elem }
                >
                    { dict.translate(item.caption) }
                </div>
                <Fade in={ this.state.open } timeout={ 0.6 }>
                    <Paper className='menu_board_paper'>
                        <div className='elements_container'>
                            {
                                _.map(item.services, (element, i) => (
                                    <BoardElement
                                        key={ i }
                                        data={ element }
                                    />
                                ))
                            }
                        </div>
                    </Paper>
                </Fade>
            </div>
        );
    }
    openBoard = () => {
        this.setState({ open: true });
    }
    closeBoard = () => {
        this.setState({ open: false });
    }
}

MenuBoard.propTypes = {
    item: PropTypes.object.isRequired,
    dict: PropTypes.object.isRequired,
    selected: PropTypes.bool.isRequired,
    //
};

//MenuBoard.defaultProps = {
//
//};

function select(store) {
    return {
        // lang: store.viewReducer.lang,
        dict: store.viewReducer.dict,
    };
}

export default connect(select)(MenuBoard);
