import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LogoType from '../../../LogoType';
// import classnames from 'classnames';
class ContactsBLock extends Component {
    render() {
        return (
            <div className='ContactsBlock'>
                <LogoType />
                <div className='contacts_adress'>Україна, м.Київ</div>
                <div className='contacts_email'>vasylivska.inna@gmail.com</div>
                <div className='contacts_phones'>
                    <div>+38 (095) 322-23-23</div>
                    <div>+38 (095) 322-23-23</div>
                </div>
                <div className='social_links'>
                    <img src='http://pngimg.com/uploads/telegram/telegram_PNG22.png' alt='' />
                    <img src='http://pngimg.com/uploads/twitter/twitter_PNG9.png' alt='' />
                    <img src='http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19756.png' alt='' />
                </div>
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
