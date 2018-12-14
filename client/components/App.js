import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tabs from './Tabs';
import cardContent from './CardContent';
import hasWindow from '../helpers/hasWindow';
import infiniteScroll from '../helpers/infiniteScroll';

import { loadCats } from '../redux/actions';
// TODO:
// infinite scroll
// favorites

class App extends Component {
  constructor(props) {
    super(props);

    this.scrollContainerRef = React.createRef();
  }
  componentDidMount() {
    // Check for window in case we're rendering on the server
    if (hasWindow) {
      infiniteScroll({
        container: this.scrollContainerRef.current,
        scope: this,
        loadMore: loadCats
      });
    }
  }
  render() {
    const { tabs, active_tab_id, dispatch } = this.props;

    return (
      <div className="card-container flex-center">
        <div className="card cat-card flex-center">
          <header className="cat-card-header">
            <h1 className="app-title is-size-2">The Cat App</h1>
            <Tabs
              dispatch={dispatch}
              active_tab_id={active_tab_id}
              tabs={tabs}
            />
          </header>
          <div className="card-content">
            <div className="content" ref={this.scrollContainerRef}>
              {cardContent(tabs[active_tab_id].label, this.props)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(App);
