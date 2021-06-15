import React, { useContext } from "react";
import { CartFavoriteContext } from "../context/CartFavoriteProvider";

function FavoriteItems() {
  const { favorite } = useContext(CartFavoriteContext);
  const { removeFromFavorite } = useContext(CartFavoriteContext);

  return (
    <>
      {favorite.length === 0 && (
        <>
          <div className="wrapper">
            <h1 className="main-title">Your Favorite List Is Empty</h1>
          </div>
        </>
      )}
      {favorite.length !== 0 && (
        <h1 className="main-title">Your Favorite List</h1>
      )}
      {favorite.map((item) => {
        return (
          <div className="container" key={item.id}>
            <div className="item">
              <button className="btn" onClick={() => removeFromFavorite(item)}>
                X
              </button>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p className="price">€{item.price}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FavoriteItems;
