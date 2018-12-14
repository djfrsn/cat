import { select, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { SET, LOAD_CATS, LOAD_CATS_FAILURE, FAVORITE_CAT } from './actions';

import { getCats } from './api';
import { postFavoriteCat } from './api';

import { catchErrors } from '../helpers/errorHandlers';

// Fetch get /cats, and merge data into state
function* loadCats() {
  try {
    yield put({ type: SET, payload: { is_loading_cats: true } });
    const state = yield select();
    const { cats } = yield call(catchErrors(getCats));

    const state_update = { ...state, cats: state.cats.concat(cats) };

    yield put({
      type: SET,
      payload: { ...state_update, is_loading_cats: false }
    });
  } catch (e) {
    yield put({ type: LOAD_CATS_FAILURE, message: e.message });
  }
}

// Post /favorites, and merge data into state
function* favoriteCat(action) {
  try {
    const state = yield select();
    const { favorites } = yield call(catchErrors(postFavoriteCat), [
      {
        id: action.payload.id
      }
    ]);

    const state_update = {
      ...state,
      favorites: state.favorites.concat(favorites)
    };

    yield put({
      type: SET,
      payload: state_update
    });
  } catch (e) {
    yield put({ type: LOAD_CATS_FAILURE, message: e.message });
  }
}

function* CatSaga() {
  yield takeLatest(LOAD_CATS, loadCats);
  yield takeEvery(FAVORITE_CAT, favoriteCat);
}

export default CatSaga;
