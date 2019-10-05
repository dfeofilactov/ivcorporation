import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Greetings from './Greetings';
import Modules from '../../../description/modules';
import { SERVICE_TYPE } from '../../../consts/generalConsts';
import Services from './Services';

class MainPage extends Component {
    render() {
        return (
            <div>
                <Greetings />
                {
                    _.map(Modules, (item, key) => {
                        if (item.type === SERVICE_TYPE) {
                            return (
                                <Services
                                    data={ item }
                                    key={ key }
                                />
                            );
                        }
                        return null;
                    })
                }
            </div>
        );
    }
}

//MainPage.propTypes = {
//
//};

//MainPage.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(MainPage);
