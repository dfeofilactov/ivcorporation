import { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

import {
    OPEN, CLOSE_LOADER,
    //
} from '../redux/actions/actions';
import Scroller from './Helpers/Scroller';
import Markup from './Markup';
import { AppContext } from '../contexts/contexts';
import Loader from './Helpers/Loader/Loader';

class App extends Component {
    componentDidMount() {
        dict.translate(this.props.lang);
        const isMobile = window.screen.width < 600;
        if (isMobile) console.log('[VERSION] MOBILE');
        else console.log('[VERSION] DESKTOP');
        window.onload = () => {
            this.props.dispatch(OPEN({ isMobile }));
            this.props.dispatch(CLOSE_LOADER());
        };
        console.log('done');
    }
    render() {
        const { lang, loading } = this.props;
        return (
            <div className='AppContainer'>
                <Scroller>
                    <AppContext.Provider value={ { lang } }>
                        { loading && <Loader /> }
                        <Markup />
                    </AppContext.Provider>
                </Scroller>
            </div>
        );
    }
}
App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    lang: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    // dict: PropTypes.object.isRequired,
};

function select(store) {
    return {
        loading: store.viewReducer.loading,
        lang: store.viewReducer.userParams.lang,
        dict: store.viewReducer.dict,
    };
}

export default withRouter(connect(select)(App));
