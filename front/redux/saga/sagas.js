import {
    // call,
    put,
    delay,
    //
} from 'redux-saga/effects';
import * as ActionTypes from '../../consts/actionTypes';
import {
    // SHOW_SNACKBAR,
    SHOW_LOADER,
    CLOSE_LOADER,
} from '../actions/actions';

const sagas = {
    * [ActionTypes.CHANGE_LANG](lang) {
        yield put(SHOW_LOADER());
        yield put(ActionTypes.SET_LANG(lang));
        yield delay(2000);
        yield put(CLOSE_LOADER());
    },
};

export default sagas;
