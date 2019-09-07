import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import Headline from './Headline';
import ServiceLink from './ServiceLink';
// import { connect } from 'react-redux';

class Services extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className={ classnames('ServicesBlock', { 'dark': data.isDark }) }>
                <Headline caption={ data.fullCaption } />
                <div className='LinksContainer'>
                    {
                        _.map(data.services, (item, key) => {
                            return (
                                <ServiceLink
                                    data={ item }
                                    isDark={ data.isDark }
                                    key={ key }
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

Services.propTypes = {
    data: PropTypes.object.isRequired,
    //
};

//Services.defaultProps = {
//
//};

// function select(/* store */) {
//     return { };
// }

export default Services;
