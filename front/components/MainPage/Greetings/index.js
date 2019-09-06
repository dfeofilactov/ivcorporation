import React, { Component } from 'react';
import imgSrc from '../../../public/img/main3.jpg';


// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import classnames from 'classnames';
class Greetings extends Component {
    render() {
        return (
            <div className='Greetings'>
                <img className='mainImg' src={ imgSrc } alt='bla' />
            </div>
        );
    }
}

//SomeComponent.propTypes = {
//
//};

//SomeComponent.defaultProps = {
//
//};

// function select(/* store */) {
//     return { };
// }

export default Greetings;
