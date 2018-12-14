import { select, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { SET, LOAD_CATS, API_FAILURE, FAVORITE_CAT } from './actions';

import { getCats } from './api';
import { postFavoriteCat } from './api';

import { catchErrors } from '../helpers/errorHandlers';

function getError(err) {
  return { type: SET, payload: { errors: { message: err.message } } };
}

// Fetch get /cats, and merge data into state
function* loadCats() {
  try {
    yield put({ type: SET, payload: { is_loading_cats: true } });
    const state = yield select();
    const { cats } = yield call(catchErrors(getCats));

    const state_update = { ...state, cats: state.cats.concat(cats) };

    yield put({
      type: SET,
      payload: {
        ...state_update,
        is_loading_cats: false,
        errors: undefined
      }
    });
  } catch (e) {
    yield put(getError(e));
  }
}

// Post /favorites, and merge data into state
function* favoriteCat(action) {
  try {
    const state = yield select();

    const { favorite } = yield call(catchErrors(postFavoriteCat), {
      url: action.payload.url,
      user_id: state.user_id
    });

    const state_update = {
      ...state,
      favorites: state.favorites.concat(favorite),
      errors: undefined
    };

    yield put({
      type: SET,
      payload: state_update
    });
  } catch (e) {
    yield put(getError(e));
  }
}

function* CatSaga() {
  yield takeLatest(LOAD_CATS, loadCats);
  yield takeEvery(FAVORITE_CAT, favoriteCat);
}

export default CatSaga;
