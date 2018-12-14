export const SET = 'SET';
export const LOAD_CATS = 'LOAD_CATS';

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
