import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactsBlock from './ContactsBlock';
// import classnames from 'classnames';
class Contacts extends Component {
    render() {
        return (
            <div className='Contacts'> 
                <div className='ContactsContainer'>
                   <ContactsBlock />
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
