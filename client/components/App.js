import React from 'react';
import { connect } from 'react-redux';

import Tabs from './Tabs';

import { updateName } from '../redux/actions';

// TODO:
// actions - setActiveTab
// infinite scroll
// favorites

const App = ({ cats, dispatch }) => {
  return (
    <div className="card-container flex-center">
      <div className="card cat-card flex-center">
        <header className="cat-card-header">
          <h1 className="app-title is-size-2">The Cat App</h1>
          <Tabs />
        </header>
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
