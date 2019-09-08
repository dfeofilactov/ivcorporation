import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
// import classnames from 'classnames';

class ServiceLink extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className='LinkContainer'>
                <div className='ServiceLink'>
                    <div className='ServiceImage'>image</div>
                    <div className='ServiceInfo'>
                        <div className='ServiceName'>{data.name}</div>
                        <div className='ServiceText'>{data.text}</div>
                        <Button
                            className='MoreBtn'
                            color='primary'
                            variant='contained'
                            classes={ { label: 'BtnLabel' } }
                        >
                            Подробнее
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

ServiceLink.propTypes = {
    data: PropTypes.object.isRequired,
    //
};

//ServiceLink.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(ServiceLink);
