import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ServicesDescription from '../../../../description/services';
import ServiceBlock from './ServicesBlock';
// import { AppContext } from '../../../../contexts/contexts';
// import classnames from 'classnames';

class SiteMap extends Component {
    render() {
        console.log(dict);
        return (
            <div className='SiteMap'>
                {
                    _.map(ServicesDescription, (o, key) => {
                        return (
                            <ServiceBlock
                                key={ key }
                                caption={ o.caption }
                                services={ o.services }
                            />
                        );
                    })
                }
            </div>
        );
    }
}

//SiteMap.propTypes = {
//
//};

//SiteMap.defaultProps = {
//
//};

// SiteMap.contextType = AppContext;

function select(/* store */) {
    return { };
}

export default connect(select)(SiteMap);
