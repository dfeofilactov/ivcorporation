import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Paper, Fade,
    //
} from '@material-ui/core';
import BoardElement from './BoardElement';
// import classnames from 'classnames';
class MenuBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            //
        };
    }
    render() {
        const { item } = this.props;
        const id = this.state.open ? 'popper' : null;
        return (
            <div
                className='menu_board'
                onFocus={ () => { } }
                onMouseOver={ this.openBoard }
                onMouseLeave={ this.closeBoard }
            >
                <div
                    aria-describedby={ id }
                    ref={ elem => this.anchorEl = elem }
                >
                    { item.caption }
                </div>
                <Fade in={ this.state.open } timeout={ 0.3 }>
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
    //
};

//MenuBoard.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(MenuBoard);
