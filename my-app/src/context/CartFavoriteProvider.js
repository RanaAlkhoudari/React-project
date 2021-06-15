import React, { useCallback, useEffect, useState } from "react";

export const CartFavoriteContext = React.createContext();

function CartFavoriteProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const total = useCallback(() => {
    const prices = cart.map((price) => price.price);
    const result = prices.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    setCartTotal(result);
  }, [cart]);

  useEffect(() => {
    total();
  }, [total]);

  function addToCart(el) {
    let addIt = true;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === el.id) addIt = false;
    }
    if (addIt) {
      setCart([...cart, el]);
    }
  }

  function removeFromCart(el) {
    let copy = [...cart];
    copy = copy.filter((cartItem) => cartItem.id !== el.id);
    setCart(copy);
  }

  function removeFromFavorite(el) {
    let copy = [...favorite];
    copy = copy.filter((cartItem) => cartItem.id !== el.id);
    setFavorite(copy);
  }

  function addToFavorite(el) {
    let addIt = true;
    for (let i = 0; i < favorite.length; i++) {
      if (favorite[i].id === el.id) addIt = false;
    }
    if (addIt) {
      setFavorite([...favorite, el]);
    }
  }

  return (
    <CartFavoriteContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        favorite,
        addToFavorite,
        removeFromCart,
        removeFromFavorite,
        cartTotal,
      }}
    >
      {children}
    </CartFavoriteContext.Provider>
  );
}

export default CartFavoriteProvider;
