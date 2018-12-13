export const UPDATE_TEMPLATE = 'UPDATE_TEMPLATE';

export function updateName(payload = {}) {
  return {
    type: UPDATE_TEMPLATE,
    payload
  };
}
