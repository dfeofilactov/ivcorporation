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
import Scroller from './Helpers/Scroller';
import Markup from './Markup';
// import MainPage from './MainPage';
// import Contacts from './Contacts';

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
                    {/* Я тоже запилил контейнер для всей поебты */}
                    {/* Назвал его разметка */}
                    {/* В нем создадим разметки для страниц - основной и информативной */}
                    {/* Или два отдельных компонента */}
                    {/* Я подумаю как лучше сделать, там еще нужно внедрить историю Router */}
                    <Markup />
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
