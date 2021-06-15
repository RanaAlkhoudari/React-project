import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import SearchNumber from "./SearchNumber";
import RadioButtons from "./RadioButtons";
import SelectCategory from "./SelectCategory";
import CartItems from "./CartItems";
import FavoriteItems from "./FavoriteItems";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <li>
            <SearchNumber />
          </li>

          <li>
            <RadioButtons />
          </li>

          <li>
            <SelectCategory />
          </li>

          <Link to="/cart">
            <li>
              <button
                className="cart-icon"
                onClick={() => {
                  <CartItems />;
                }}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
            </li>
          </Link>

          <Link to="/favorite">
            <li>
              <button
                className="cart-icon"
                onClick={() => {
                  <FavoriteItems />;
                }}
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
