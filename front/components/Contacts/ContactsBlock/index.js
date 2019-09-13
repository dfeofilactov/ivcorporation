import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
class ContactsBLock extends Component {
    render() {
        return (
            <div className='ContactsBlock'>
                <img src='https://live.staticflickr.com/65535/48701108292_210a00bb9d_o.png' alt='' />
                <div>Україна, м.Київ</div>
                <div className='DarkContactsText'>vasylivska.inna@gmail.com</div>
                <div className='DarkContactsText'>+38 (095) 322-23-23</div>
                <div className='DarkContactsText'>+38 (095) 322-23-23</div>
                <img src='http://pngimg.com/uploads/telegram/telegram_PNG22.png' alt='' />
                <img src='http://pngimg.com/uploads/twitter/twitter_PNG9.png' alt='' />
                <img src='https://i.pinimg.com/originals/41/28/2b/41282b58cf85ddaf5d28df96ed91de98.png' alt='' />
            </div>
        );
    }
}

//ContactsBLock.propTypes = {
//
//};

//ContactsBLock.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(ContactsBLock);
