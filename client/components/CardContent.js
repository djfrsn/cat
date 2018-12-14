import React from 'react';

import { favoriteCat } from '../redux/actions';

const Cat = ({ id, url }) => <img className="cat-image" src={url} />;

export const CatCard = ({
  cats,
  dispatch,
  is_loading_cats,
  show_favorites_button = true
}) => (
  <div className="cats-container">
    {cats.map(({ _id, url }) => {
      return (
        <div key={_id}>
          {show_favorites_button && (
            <button
              className="favorites-button"
              onClick={() => dispatch(favoriteCat({ url }))}
            >
              ❤️
            </button>
          )}
          <Cat id={_id} url={url} />
        </div>
      );
    })}
    {is_loading_cats && (
      <div className="cats-load-indicator">Loading more cats...</div>
    )}
  </div>
);

export const FavoritesCard = ({ favorites, is_loading_cats }) => {
  return (
    <div className="favorites-container">
      {favorites.length ? (
        <CatCard
          cats={favorites}
          is_loading_cats={is_loading_cats}
          show_favorites_button={false}
        />
      ) : (
        <p className="favorites-empty-msg">Favorite a cat!</p>
      )}
    </div>
  );
};

// export const FavoritesCard = ({ favorites }) => {
//   return (
//     <div className="favorites-container">
//       {favorites.length ? (
//         favorites.map(({ id, url }) => {
//           return <Cat id={id} url={url} />;
//         })
//       ) : (
//         <p className="favorites-empty-msg">Favorite a cat!</p>
//       )}
//     </div>
//   );
// };

export default function cardContent(card_name, props) {
  switch (card_name) {
    case 'Favorites':
      return <FavoritesCard {...props} />;
    case 'Cats':
    default:
      return <CatCard {...props} />;
  }
}
