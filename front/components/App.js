import { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
// import Scroller from 'react-custom-scroll';
// import Scroller from 'react-perfect-scrollbar';

import {
    OPEN,
    //
} from '../redux/actions/actions';
import Greetings from './Greetings';
import Menu from './Menu';
import Services from './Services';
import Modules from '../description/modules';
import { SERVICE_TYPE } from '../consts/generalConsts';
import ImportantBlock from './ImportantBlock';
import Scroller from './Helpers/Scroller';
import Markup from './Markup';

class App extends Component {
    componentDidMount() {
        const isMobile = window.screen.width < 600;
        if (isMobile) console.log('[VERSION] MOBILE');
        else console.log('[VERSION] DESKTOP');
        window.onload = () => {
            _.delay(() => {
                this.props.dispatch(OPEN({ isMobile }));
            }, 1000);
        };
    }
    render() {
        // const { dict } = this.props;
        return (
            <div className='AppContainer'>
                <Scroller>
                    <Markup />
                    <MainPage />
                    <Contacts />
                </Scroller>
            </div>
        );
    }
}
App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    // dict: PropTypes.object.isRequired,
};

function select(store) {
    return {
        // lang: store.viewReducer.lang,
        dict: store.viewReducer.dict,
    };
}

export default withRouter(connect(select)(App));
