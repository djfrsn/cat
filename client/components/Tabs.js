import React from 'react';

export default () => {
  return (
    <div className="tabs is-centered">
      <ul>
        <li className="is-active">
          <a>
            <span className="icon is-small">
              <i className="fas fa-image" aria-hidden="true" />
            </span>
            <span>Cats</span>
          </a>
        </li>
        <li>
          <a>
            <span className="icon is-small">
              <i className="fas fa-music" aria-hidden="true" />
            </span>
            <span>Favorites</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
