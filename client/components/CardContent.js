import React from 'react';

const Cat = ({ id, url }) => <img className="cat-image" key={id} src={url} />;

export const CatCard = ({ cats, is_loading_cats }) => (
  <div className="cats-container">
    {cats.map(({ id, url }) => {
      return <Cat id={id} url={url} />;
    })}
    {is_loading_cats && (
      <div className="cats-load-indicator">Loading more cats...</div>
    )}
  </div>
);

export const FavoritesCard = ({ favorites }) => {
  return (
    <div className="favorites-container">
      {favorites.length ? (
        favorites.map(({ id, url }) => {
          return <Cat id={id} url={url} />;
        })
      ) : (
        <p className="favorites-empty-msg">Favorite a cat!</p>
      )}
    </div>
  );
};

export default function cardContent(card_name, props) {
  switch (card_name) {
    case 'Favorites':
      return <FavoritesCard {...props} />;
    case 'Cats':
    default:
      return <CatCard {...props} />;
  }
}
