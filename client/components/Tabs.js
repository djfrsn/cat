import React from 'react';

import { set } from '../redux/actions';

export default ({ dispatch, active_tab_id, tabs }) => {
  return (
    <div className="tabs is-centered">
      <ul>
        {Object.keys(tabs).map(tab_id => {
          const { id, label } = tabs[tab_id];
          const class_name = id === active_tab_id ? 'is-active' : '';

          return (
            <li
              key={id}
              className={class_name}
              onClick={() => dispatch(set({ active_tab_id: id }))}
            >
              <a>
                <span className="icon is-small">
                  <i className="fas fa-image" aria-hidden="true" />
                </span>
                <span>{label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
