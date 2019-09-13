import React, { Component } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line import/named
import { IMG_IMPORTANT_BGR_URL } from '../../consts/generalConsts';
import ImportantLink from './ImportantLink';
// import classnames from 'classnames';
class Important extends Component {
    render() {
        return (
            <div className='Important'>
                <img className='BackgroundImg' src={ IMG_IMPORTANT_BGR_URL } alt='background' />
                <div className='Label'>Another Important</div>
                <div className='Important_Items_Container'>
                    <ImportantLink />
                    <ImportantLink />
                    <ImportantLink />
                </div>
            </div>
        );
    }
}

// Important.propTypes = {
//     // dispatch: PropTypes.func.isRequired,
//     // dict: PropTypes.object.isRequired,
// };

//Important.defaultProps = {
//
//};

function select(store) {
    return { dict: store.viewReducer.dict };
}

export default connect(select)(Important);
