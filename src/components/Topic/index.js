import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
class Topic extends Component {
    render() {
        const { key } = this.props;
        return (
            <div className='Topic'>{`Topic ${ key }`}</div>
        );
    }
}

Topic.propTypes = {
    key: PropTypes.string.isRequired,
    //
};

//Topic.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(Topic);
