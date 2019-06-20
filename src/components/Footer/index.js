import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
class Footer extends Component {
    render() {
        return (
            <div className='Footer'>Footer</div>
        );
    }
}

//Footer.propTypes = {
//
//};

//Footer.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(Footer);
