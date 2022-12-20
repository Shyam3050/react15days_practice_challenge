import { useState } from "react";
import Header from "./component/layout/Header";
import Products from "./component/products/Products";
import Cart from "./component/cart/Cart";
import ContextProvider from "./store/ContextProvider";
function App() {
  const [cartShow, setCartShow] = useState(false);

  function cartOpen() {
    setCartShow(true);
  }
  function cartClose() {
    setCartShow(false);
  }
  return (
    <ContextProvider>
      {cartShow && <Cart onCloseCart={cartClose} />}
      <Header cartShow={cartOpen} />
      <Products />
    </ContextProvider>
  );
}

export default App;
