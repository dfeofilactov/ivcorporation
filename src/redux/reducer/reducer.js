import { combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';
import Immutable from 'seamless-immutable';
import * as ActionTypes from '../../consts/actionTypes';
import { getDict } from '../../dictionary';
import {
    LANG_EN,
    //
} from '../../consts/generalConsts';
// import Modules from '../../description/modules';
// import photos from '../../description/photos';

const initialState = Immutable({
    userParams: {
        lang: LANG_EN,
        //
    },
    mobileVersion: false,
    dict: getDict(LANG_EN),
});

const viewReducer = createReducer(initialState, {
    [ActionTypes.RESET_APP]() {
        return initialState.merge({
            loading: false,
            //
        });
    },
    [ActionTypes.OPEN](state, action) {
        return state.merge({
            loading: false,
            mobileVersion: action.params.isMobile,
        });
    },
    [ActionTypes.CHANGE_LANG](state, action) {
        return state.merge({
            userParams: { lang: action.lang },
            dict: getDict(action.lang),
        });
        // return state.setIn(['userParams', 'lang'], action.lang);
    },
});

const mainReducer = combineReducers({ viewReducer });

export default mainReducer;
