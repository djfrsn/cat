import React from 'react';
import { connect } from 'react-redux';

import { updateName } from '../redux/actions';

const App = ({ cats, dispatch }) => {
  return (
    <div>
      <div className="card cat-card flex-center">
        <header className="card-header">tabs...</header>
        <div className="card-content">
          <div className="content">
            <div className="cats-container">
              {cats.map(({ url, id }) => {
                return <img className="cat-image" key={id} src={url} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(state => state)(App);
