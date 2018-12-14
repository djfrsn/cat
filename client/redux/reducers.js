import { SET } from './actions';

export const initial_state = {
  cats: [],
  is_loading_cats: false,
  loaded_max_cats: false,
  tabs: {
    '0': {
      id: '0',
      label: 'Cats'
    },
    '1': {
      id: '1',
      label: 'Favorites'
    }
  },
  active_tab_id: '0',
  favorites: []
};

function catReducer(state = initial_state, action) {
  switch (action.type) {
    case SET:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export default catReducer;
