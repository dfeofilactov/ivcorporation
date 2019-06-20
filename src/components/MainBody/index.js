import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
class MainBody extends Component {
    render() {
        return (
            <div className='MainBody'>MainBody</div>
        );
    }
}

//MainBody.propTypes = {
//
//};

//MainBody.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(MainBody);
