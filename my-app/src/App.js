import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Footer from "./components/Footer";
import SingleItem from "./components/SingleItem";
import Limit from "./components/Limit";
import Sort from "./components/Sort";
import Category from "./components/Category";
import CartItems from "./components/CartItems";
import FavoriteItems from "./components/FavoriteItems";
import CartFavoriteProvider from "./context/CartFavoriteProvider";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <CartFavoriteProvider>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Products}></Route>
              <Route path="/limit/:value" exact component={Limit}></Route>
              <Route path="/sort/:value" exact component={Sort}></Route>
              <Route path="/category/:value" exact component={Category}></Route>
              <Route path="/cart" exact component={CartItems}></Route>
              <Route path="/favorite" exact component={FavoriteItems}></Route>
              <Route
                path="/product/:productId"
                exact
                component={SingleItem}
              ></Route>
              <Route path="*" component={Error}></Route>
            </Switch>
            <Footer />
          </CartFavoriteProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
