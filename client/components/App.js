import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tabs from './Tabs';
import cardContent from './CardContent';
import hasWindow from '../helpers/hasWindow';

import { loadCats } from '../redux/actions';
// TODO:
// infinite scroll
// favorites

function infiniteScroll({ container, scope, loadMore }) {
  // container.onscroll = () => {
  //   console.log(scope);
  //   // const {
  //   //   props: { error, dispatch, is_loading_cats, loaded_max_cats }
  //   // } = scope;
  //   // // Bails early if:
  //   // // * there's an error
  //   // // * it's already loading
  //   // // * there's nothing left to load
  //   // if (error || is_loading_cats || !loaded_max_cats) return;
  //   // // Checks that the page has scrolled to the bottom
  //   // var scrollY = container.scrollHeight - container.scrollTop;
  //   // var height = container.offsetHeight;
  //   // var offset = height - scrollY;
  //   // if (offset == 0 || offset == 1) {
  //   //   dispatch(loadMore());
  //   // }
  // };
}

class App extends Component {
  constructor(props) {
    super(props);

    this.scrollContainerRef = React.createRef();
  }
  componentDidMount() {
    if (hasWindow) {
      infiniteScroll({
        container: this.scrollContainerRef,
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
            <div className="content">
              {cardContent(tabs[active_tab_id].label, this.props)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(App);
