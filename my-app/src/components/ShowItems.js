import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { CartFavoriteContext } from "../context/CartFavoriteProvider";

function ShowItems({ items, removeItem }) {
  const { addToCart } = useContext(CartFavoriteContext);
  const { addToFavorite } = useContext(CartFavoriteContext);

  return (
    <>
      {items.map((item) => {
        return (
          <div className="item" key={item.id}>
            <FontAwesomeIcon
              onClick={() => addToFavorite(item)}
              icon={farHeart}
              className="favorite-icon"
            />

            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.title} />

              <p>{item.title}</p>
              <p className="price">€{item.price}</p>
            </Link>
            <button className="btn-remove" onClick={() => removeItem(item.id)}>
              Not interested
            </button>
            <button className="btn-cart" onClick={() => addToCart(item)}>
              Add to cart
            </button>
          </div>
        );
      })}
    </>
  );
}

export default ShowItems;
