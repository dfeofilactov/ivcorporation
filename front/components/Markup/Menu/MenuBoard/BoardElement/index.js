import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Icon, Button } from '@material-ui/core';

class BoardElement extends Component {
    render() {
        const { data } = this.props;
        return (
            <Button className='board_element'>
                <div className='board_images'>
                    <div className={ classnames('image_type', 'first') }>
                        <img src={ data.imagePrimary } alt='board' />
                    </div>
                    <div className={ classnames('image_type', 'second') }>
                        <img src={ data.imageSecondary } alt='board' />
                    </div>
                </div>
                <div className='board_content'>
                    <div className='board_sub_caption'>Услуги</div>
                    <div className='board_caption'>{data.caption}</div>
                    <div className='board_text'>{data.text}</div>
                </div>
                <div className='board_go'>
                    <Icon>keyboard_arrow_right</Icon>
                </div>
            </Button>
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
