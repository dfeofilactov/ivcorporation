import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
class Header extends Component {
    render() {
        return (
            <div className='Header'>Header</div>
        );
    }
}

//Header.propTypes = {
//
//};

//Header.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(Header);
