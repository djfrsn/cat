import React from 'react';
import { connect } from 'react-redux';

import Tabs from './Tabs';
import cardContent from './CardContent';

import { updateName } from '../redux/actions';

// TODO:
// actions - setActiveTab
// infinite scroll
// favorites

const App = props => {
  const { tabs, active_tab_id, dispatch } = props;

  return (
    <div className="card-container flex-center">
      <div className="card cat-card flex-center">
        <header className="cat-card-header">
          <h1 className="app-title is-size-2">The Cat App</h1>
          <Tabs dispatch={dispatch} active_tab_id={active_tab_id} tabs={tabs} />
        </header>
        <div className="card-content">
          <div className="content">
            {cardContent(tabs[active_tab_id].label, props)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(state => state)(App);
