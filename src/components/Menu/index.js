import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
class Menu extends Component {
    render() {
        return (
            <div className='Menu'>Menu</div>
        );
    }
}

//Menu.propTypes = {
//
//};

//Menu.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(Menu);
