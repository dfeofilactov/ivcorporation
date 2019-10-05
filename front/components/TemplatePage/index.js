import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
class TemplatePage extends Component {
    render() {
        return (
            <div>
                <div className='HeaderImg'>
                    <img src='https://i.imgur.com/szrLKL1.jpg' alt='header image' />
                </div>
                <div className='TemplateText'>
                    <div className='TemplateText_Header'>
                        Господарські спори
                    </div>
                    <div className='TemplateText_Content'>
                        {
                            
                        }
                    </div>
                </div>
            </div>
        );
    }
}

//TemplatePage.propTypes = {
//
//};

//TemplatePage.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(TemplatePage);
