import { select, call, put, takeLatest } from 'redux-saga/effects';
import { SET, LOAD_CATS, LOAD_CATS_FAILURE } from './actions';

import { getCats } from './api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* loadCats(action) {
  try {
    yield put({ type: SET, payload: { is_loading_cats: true } });
    const state = yield select();
    const { cats } = yield call(getCats);

    const state_update = { ...state, cats: state.cats.concat(cats) };

    yield put({
      type: SET,
      payload: { ...state_update, is_loading_cats: false }
    });
  } catch (e) {
    yield put({ type: LOAD_CATS_FAILURE, message: e.message });
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* CatSaga() {
  yield takeLatest(LOAD_CATS, loadCats);
}

export default CatSaga;
