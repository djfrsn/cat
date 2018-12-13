import { UPDATE_TEMPLATE } from './actions';

const inital_state = {
  name: ''
};

function catReducer(inital_state, action) {
  switch (action.type) {
    case UPDATE_TEMPLATE:
      return {
        ...state,
        name: action.payload.name
      };
    default:
      return inital_state;
  }
}

export default catReducer;
