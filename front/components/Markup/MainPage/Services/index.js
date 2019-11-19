import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';

import Headline from './Headline';
import General from './General';
import Additional from './Additional';
import { SERVICE_TYPE_GENERAL, SERVICE_TYPE_ADDITIONAL, IMG_ADDITIONAL_BGR_URL } from '../../../../consts/generalConsts';
import ServicesDescription from '../../../../description/services';
import { SET_SCROLL_POS } from '../../../../redux/actions/actions';

class Services extends Component {
    constructor(props) {
        super(props);

        this.renderGeneral = ::this.renderGeneral;
        this.renderAdditional = ::this.renderAdditional;
    }
    componentDidMount() {
        const { data: { name, isDark } } = this.props;
        if (this.container) {
            this.props.dispatch(SET_SCROLL_POS(name, {
                isDark,
                top: this.container.getBoundingClientRect().top,
            }));
        }
    }
    render() {
        const { data } = this.props;
        const services = _.get(ServicesDescription, `${ data.name }.services`);
        return (
            <>
                { data.serviceType === SERVICE_TYPE_GENERAL && this.renderGeneral(services) }
                { data.serviceType === SERVICE_TYPE_ADDITIONAL && this.renderAdditional(services) }
            </>
        );
    }
    renderGeneral(services) {
        const { data } = this.props;
        return (
            <div ref={ e => this.container = e } className={ classnames('ServicesGeneral', { 'dark': data.isDark }) }>
                <Headline
                    caption={ data.caption }
                    slogan={ data.slogan }
                />
                <div className='LinksContainerWrap'>
                    <div className='LinksContainer'>
                        {
                            _.map(services, (item, key) => {
                                return (
                                    <General
                                        data={ item }
                                        isDark={ data.isDark }
                                        key={ key }
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
    renderAdditional(services) {
        const { data, dict } = this.props;
        return (
            <div ref={ e => this.container = e } className='AdditionalContainer'>
                <img className='AdditionalBackgroundImg' src={ IMG_ADDITIONAL_BGR_URL } alt='backAdditional' />
                <div className='AdditionalBackgroundFilter' />
                <div className='AdditionalLabelContainer'>
                    <div className='AdditionalLabel'>{dict.translate(data.caption)}</div>
                </div>
                <div className={ classnames('ServicesAdditional') }>
                    {
                        _.map(services, (item, key) => {
                            return (
                                <Additional
                                    data={ item }
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
    dict: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    //
};

//Services.defaultProps = {
//
//};

function select(store) {
    return {
        dict: store.viewReducer.dict,
        //
    };
}

export default connect(select)(Services);
