import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactsBlock from './ContactsBlock';
import ContactsLink from './ContactsLink';
// import classnames from 'classnames';
class Contacts extends Component {
    render() {
        return (
            <div className='Contacts'>
                <div className='ContactsContainer'>
                    <ContactsBlock />
                    <ContactsLink />
                    <ContactsLink />
                    <ContactsLink />
                </div>
                <div className='ContactsCredits'>
                    <div className='ContactsRightsName'>Інна Василівська.&nbsp;</div>
                    <div className='ContactsRightsExplain'>Адвокат. Всі права захищено. Україна, Київ, 2019.</div>
                    <div className='Design'>Designed by &nbsp;</div>
                    <div className='Creator'>Denis Feofilaktov</div>
                </div>
            </div>
        );
    }
}

//Contacts.propTypes = {
//
//};

//Contacts.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(Contacts);
