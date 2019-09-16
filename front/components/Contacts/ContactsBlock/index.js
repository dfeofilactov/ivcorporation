import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LogoType from '../../LogoType';
// import classnames from 'classnames';
class ContactsBLock extends Component {
    render() {
        return (
            <div className='ContactsBlock'>
                {/*
                    Тоже нужна автоматизация
                    Мы НЕ должны менять параметры и надписи страницы
                    тут
                    Это должно происходить в отдельном месте
                    Это просто View в котором описан внешний вид
                    Никаких данных!!!
                */}
                <LogoType />
                <div className='Adress'>Україна, м.Київ</div>
                <div className='DarkContactsText'>vasylivska.inna@gmail.com</div>
                <div className='DarkContactsText'>
                    <div>+38 (095) 322-23-23</div>
                    <div>+38 (095) 322-23-23</div>
                </div>
                <div className='SocialNetworksIMG'>
                    {/*
                        картинки тоже нужно будет хранить в одном месте
                        скачай их все и сохрани
                        потом повставляем ссылки с одного места
                    */}
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
