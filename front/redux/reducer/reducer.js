import { combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';
import Immutable from 'seamless-immutable';
import * as ActionTypes from '../../consts/actionTypes';
import { getDict } from '../../dictionary';
import {
    // LANG_EN,
    LANG_UA,
} from '../../consts/generalConsts';
// import Modules from '../../description/modules';
// import photos from '../../description/photos';

const initialState = Immutable({
    SnackbarMessage: {},
    SnackbarVisible: false,
    MenuSelectedIndex: 0,
    MenuScrolled: false,
    userParams: {
        lang: LANG_UA,
        //
    },
    ScrollPos: 0,
    loading: true,
    mobileVersion: false,
    page: {},
    dict: getDict(LANG_UA),
    scrollPoints: { top: { isDark: true, top: 0 } },
    isMenuDark: true,
});

const viewReducer = createReducer(initialState, {
    [ActionTypes.RESET_APP]() {
        return initialState;
    },
    [ActionTypes.OPEN_MAIN](state, action) {
        return state.merge({
            //
            mobileVersion: action.params.isMobile,
        });
    },
    [ActionTypes.SET_LANG](state, action) {
        return state.merge({
            userParams: { lang: action.lang },
            dict: getDict(action.lang),
        });
    },
    [ActionTypes.SHOW_SNACKBAR](state, action) {
        return state.merge({ SnackbarVisible: true, SnackbarMessage: action.msg });
    },
    [ActionTypes.CLOSE_SNACKBAR](state) {
        return state.merge({ SnackbarVisible: false });
    },
    [ActionTypes.SHOW_LOADER](state) {
        return state.merge({ loading: true });
    },
    [ActionTypes.CLOSE_LOADER](state) {
        return state.merge({ loading: false });
    },
    [ActionTypes.SET_MENU_SCROLLED](state) {
        return state.merge({ MenuScrolled: true });
    },
    [ActionTypes.RESET_MENU](state) {
        return state.merge({ MenuScrolled: false });
    },
    [ActionTypes.OPEN_PAGE](state, action) {
        return state.merge({
            ScrollPos: 0,
            page: action.page,
        });
    },
    [ActionTypes.SET_SCROLL_POS](state, action) {
        const { name, pos } = action;
        if (pos !== state.scrollPoints[name]) {
            const newPoints = _.cloneDeep(state.scrollPoints);
            newPoints[name] = pos;
            console.log(newPoints);
            return state.merge({ scrollPoints: newPoints });
        }
        return null;
    },
    [ActionTypes.SET_MENU_DARK](state, action) {
        const { value } = action;
        if (value !== state.isMenuDark) {
            return state.merge({ isMenuDark: value });
        }
        return null;
    },
});

const mainReducer = combineReducers({ viewReducer });

export default mainReducer;
