import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { OPEN_PAGE } from '../../../../../redux/actions/actions';
import { AppContext } from '../../../../../contexts/contexts';
// import classnames from 'classnames';

class General extends Component {
    render() {
        const { data } = this.props;
        const { lang } = this.context;
        return (
            <div className='LinkContainer'>
                <div className='ServiceLink'>
                    <div className='ServiceImage'>
                        <img src={ data.image } alt='service' />
                    </div>
                    <div className='ServiceInfo'>
                        <div className='ServiceName'>{dict.translate(data.caption, lang)}</div>
                        <div className='ServiceText'>{dict.translate(data.text, lang)}</div>
                        <Link className='ServiceBtn' to={ `/${ data.name }` }>
                            <Button
                                className='MoreBtn'
                                color='primary'
                                variant='contained'
                                classes={ { label: 'BtnLabel' } }
                                onClick={ () => { this.props.dispatch(OPEN_PAGE(data)); } }
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

General.contextType = AppContext;

function select(/* store */) {
    return { };
}

export default connect(select)(General);
