import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import ProductContext from "./contexts/ProductContext";
// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import CartContext from "./contexts/CartContext";
import ShoppingCartItem from "./components/ShoppingCartItem";
function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    // add the given item to the cart
    setCart(cart => [...cart, item]);
  };

  const clearRemoved = id => {
    setCart(cart => cart.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart, clearRemoved}}>
          <Navigation />
          {/* Routes */}
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={ShoppingCart} />} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
