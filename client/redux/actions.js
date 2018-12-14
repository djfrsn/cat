export const SET = 'SET';

export function set(payload = {}) {
  return {
    type: SET,
    payload
  };
}
