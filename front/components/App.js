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
import Menu from './Menu';
import Scroller from './Helpers/Scroller';
import Contacts from './Contacts';
import MainPage from './MainPage';

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
                    <Menu />
                    {/* <Greetings />
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
                    <Important /> */}
                    <MainPage />
                    {/* <TemplatePage />  */}
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
