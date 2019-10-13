import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactsBlock from './ContactsBlock';
import SiteMap from './SiteMap';
// import classnames from 'classnames';
class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='footer_wrap'>
                    <ContactsBlock />
                    <SiteMap />
                </div>
                <div className='footer_credits'>
                    <div className='credits_name'>Інна Василівська.&nbsp;</div>
                    <div className='credits_info'>Адвокат. Всі права захищено. Україна, Київ, 2019.</div>
                    <div className='credits_design'>Designed by &nbsp;</div>
                    <div className='credits_designer'>Denis Feofilaktov</div>
                </div>
            </footer>
        );
    }
}

//Footer.propTypes = {
//
//};

//Footer.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(Footer);
