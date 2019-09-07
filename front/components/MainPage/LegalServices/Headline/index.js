import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Headline extends Component {
    render() {
        const { dict } = this.props;
        return (
            <div className='Headline'>
                <div className='TextHeadline'>
                    <div className='HeadlineBigText'>
                        { dict.translate('Headline.LegalServiceText') }
                    </div>
                    <div className='HeadlineSmallText'>
                        { dict.translate('Headline.Slogan') }
                    </div>
                </div>
            </div>
        );
    }
}

Headline.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    dict: PropTypes.object.isRequired,
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
