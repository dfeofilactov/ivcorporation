import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Menu from './Menu';
import Footer from './Footer';
import MainPage from './MainPage';
// import classnames from 'classnames';
class Markup extends Component {
    render() {
        return (
            <div className='Markup'>
                <Menu />
                <MainPage />
                <Footer />
            </div>
        );
    }
}

//Markup.propTypes = {
//
//};

//Markup.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(Markup);
