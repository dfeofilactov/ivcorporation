import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Headline extends Component {
    render() {
        const { dict, caption, slogan } = this.props;
        return (
            <div className='Headline'>
                <div className='TextHeadline'>
                    <div className='HeadlineBigText'>
                        { dict.translate(caption) }
                    </div>
                    <div className='HeadlineSmallText'>
                        { dict.translate(slogan) }
                    </div>
                </div>
            </div>
        );
    }
}

Headline.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    dict: PropTypes.object.isRequired,
    caption: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
};

//Headline.defaultProps = {
//
//};

function select(store) {
    return {
        // lang: store.viewReducer.lang,
        dict: store.viewReducer.dict,
    };
}

export default connect(select)(Headline);
