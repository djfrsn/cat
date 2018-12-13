import React from 'react';
import { connect } from 'react-redux';

import { updateName } from '../redux/actions';

const App = props => {
  return (
    <div onClick={() => props.dispatch(updateName({ name: 'New!' }))}>
      Hello {props.name || 'stranger'}!
    </div>
  );
};

export default connect(state => state)(App);
