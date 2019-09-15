import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Menu from '../Menu';
import Greetings from '../Greetings';
import Modules from '../../description/modules';
import { SERVICE_TYPE } from '../../consts/generalConsts';
import Services from '../Services';
import Footer from '../Footer';
// import classnames from 'classnames';
class Markup extends Component {
    render() {
        return (
            <div className='Markup'>
                <Menu />
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
                <Footer />
            </div>
        );
    }
}

//Markup.propTypes = {
//
//};

//Markup.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(Markup);
