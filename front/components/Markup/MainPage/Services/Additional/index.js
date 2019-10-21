import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
import { Button, Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { OPEN_PAGE } from '../../../../../redux/actions/actions';

class Additional extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className='AdditionalLink'>
                <div className='AdditionalIcon'>
                    <Icon fontSize='inherit' color='secondary'>{ data.icon }</Icon>
                </div>
                <div className='AdditionalCaption'>{ data.caption }</div>
                <Link className='additional_link' to={ `/${ data.name }` }>
                    <Button
                        className='MoreBtn'
                        color='primary'
                        variant='contained'
                        size='small'
                        classes={ { label: 'BtnLabel' } }
                        onClick={ () => { this.props.dispatch(OPEN_PAGE(data)); } }
                    >
                    Подробнее
                    </Button>
                </Link>
            </div>
        );
    }
}

Additional.propTypes = {
    data: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    //
};
//Additional.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(Additional);
