import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
import { Button, Icon } from '@material-ui/core';

class Additional extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className='AdditionalLink'>
                <div className='AdditionalIcon'>
                    <Icon fontSize='inherit' color='secondary'>{ data.icon }</Icon>
                </div>
                <div className='AdditionalCaption'>{ data.caption }</div>
                <Button
                    className='MoreBtn'
                    color='primary'
                    variant='contained'
                    size='small'
                    classes={ { label: 'BtnLabel' } }
                >
                    Подробнее
                </Button>
            </div>
        );
    }
}

Additional.propTypes = {
    data: PropTypes.object.isRequired,
    //
};
//Additional.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(Additional);
