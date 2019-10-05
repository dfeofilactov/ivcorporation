import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../Footer';
// import classnames from 'classnames';
class InfoPage extends Component {
    render() {
        return (
            <div className='InfoPage'>
                <div>
                    <div className='header_img'>
                        <img src='https://i.imgur.com/szrLKL1.jpg' alt='headered' />
                    </div>
                    <div className='info_text'>
                        <div className='info_header'>
                            Господарські спори
                        </div>
                        <div className='info_content'>
                            fjdsnknfd
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

InfoPage.propTypes = {

};

//InfoPage.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(InfoPage);
