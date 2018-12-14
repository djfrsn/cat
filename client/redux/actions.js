export const SET = 'SET';
export const LOAD_CATS = 'LOAD_CATS';
export const LOAD_CATS_FAILURE = 'LOAD_CATS_FAILURE';

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
