import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
import { Button } from '@material-ui/core';

class ImportantLink extends Component {
    render() {
        return (
            <div className='ImportantLink'>
                <div className='ImportantImage'>image</div>
                <div className='ImportantText'> Some text</div>
                <div className='ImportantButton'>
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
        );
    }
}

// ImportantLink.propTypes = {
//     data: PropTypes.object.isRequired,
//     //
// };
//ImportantLink.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(ImportantLink);
