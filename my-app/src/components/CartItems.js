import React, { useContext } from "react";
import { CartFavoriteContext } from "../context/CartFavoriteProvider";

function CartItems() {
  const { cart } = useContext(CartFavoriteContext);
  const { removeFromCart } = useContext(CartFavoriteContext);
  const { cartTotal } = useContext(CartFavoriteContext);

  return (
    <>
      {cart.length === 0 && (
        <>
          <div className="wrapper">
            <h1 className="main-title">Your Cart Is Empty</h1>
            <p className="main-title">Total: 0</p>
          </div>
        </>
      )}
      {cart.length !== 0 && (
        <>
          <h1 className="main-title">Your Cart</h1>
          <p className="main-title">Total: € {cartTotal.toFixed(2)}</p>
        </>
      )}
      {cart.map((item) => {
        return (
          <div className="container" key={item.id}>
            <div className="item">
              <button className="btn" onClick={() => removeFromCart(item)}>
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

export default CartItems;
