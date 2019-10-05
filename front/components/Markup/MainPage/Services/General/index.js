import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { OPEN_PAGE } from '../../../../../redux/actions/actions';
// import classnames from 'classnames';

class General extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className='LinkContainer'>
                <div className='ServiceLink'>
                    <div className='ServiceImage'>
                        <img src={ data.image } alt='service' />
                    </div>
                    <div className='ServiceInfo'>
                        <div className='ServiceName'>{data.name}</div>
                        <div className='ServiceText'>{data.text}</div>
                        <Link to={ `/services/${ data.name }` }>
                            <Button
                                className='MoreBtn'
                                color='primary'
                                variant='contained'
                                classes={ { label: 'BtnLabel' } }
                                onClick={ () => { this.props.dispatch(OPEN_PAGE()); } }
                                size='small'
                            >
                                Подробнее
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

General.propTypes = {
    data: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    //
};

//General.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(General);
