export const SET = 'SET';
export const LOAD_CATS = 'LOAD_CATS';
export const FAVORITE_CAT = 'FAVORITE_CAT';

export function set(payload = {}) {
  return {
    type: SET,
    payload
  };
}

export function loadCats() {
  return {
    type: LOAD_CATS
  };
}

export function favoriteCat(payload = {}) {
  return {
    type: FAVORITE_CAT,
    payload
  };
}
