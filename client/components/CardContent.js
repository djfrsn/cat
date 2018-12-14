import React from 'react';

export const CatCard = ({ cats, is_loading_cats }) => (
  <div className="cats-container">
    {cats.map(({ url, id }) => {
      return <img className="cat-image" key={id} src={url} />;
    })}
    {is_loading_cats && (
      <div className="cats-load-indicator">Loading more cats...</div>
    )}
  </div>
);

export const FavoritesCard = ({ favorites }) => {
  return <div>{favorites.length} favorites available</div>;
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
