import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
// import classnames from 'classnames';
class BoardElement extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className='board_element'>
                <div className='board_sub_caption'>Услуги</div>
                <div className='board_caption'>{ data.caption }</div>
                <div className='board_text'>{ data.text }</div>
                <Button
                    className='MoreBtn'
                    color='primary'
                    variant='contained'
                    classes={ { label: 'BtnLabel' } }
                    size='small'
                >
                    Подробнее
                </Button>
            </div>
        );
    }
}

BoardElement.propTypes = {
    data: PropTypes.object.isRequired,
    //
};

//BoardElement.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(BoardElement);
