export const UPDATE_TEMPLATE = 'UPDATE_TEMPLATE';

export function updateTemplate(payload = {}) {
  return {
    type: UPDATE_TEMPLATE,
    payload
  };
}
