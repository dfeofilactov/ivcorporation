import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
class ContactsLink extends Component {
    render() {
        // Не четко!!!
        // Не четко!!!
        // То есть каждый раз когда я вдруг захочу добавить услугу
        // Мы должны будем добавлять ее и сюда вручную?
        // Где магия автоматизации???
        // Зачем нам нужно описание (папочка description)
        // Там же уже все прописано и названия услуг и сколько их
        return (
            <div className='ContactsLink'>
                <div className='ContactsLinkHeader'>
                    Якість послуги
                </div>
                <div className='DarkContactsLink'>
                    <div>Отака послуга</div>
                    <div>Та ще й така</div>
                    <div>Отакенна послуга</div>
                    <div>Послуга для особливих</div>
                    <div>Ну ще така</div>
                    <div>Отакенна послуга</div>
                    <div>Послуга для особливих</div>
                    <div>Ну ще така</div>
                </div>
            </div>
        );
    }
}

//ContactsLink.propTypes = {
//
//};

//ContactsLink.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(ContactsLink);
