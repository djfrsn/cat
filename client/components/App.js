import React from 'react';
import { connect } from 'react-redux';

import { updateName } from '../redux/actions';

const App = ({ cats, dispatch }) => {
  return (
    <div onClick={() => dispatch(updateName({ name: 'New!' }))}>
      {cats.length} cats loaded
      {cats.map(({ url, id }) => {
        return <img key={id} src={url} />;
      })}
    </div>
  );
};

export default connect(state => state)(App);
