import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./Welcome";
import Product from "./Product";
import MainHeader from "./component/MainHeader";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate  to="/welcome"/>} />
          <Route path="/welcome/*" element={<Welcome />} >
            <Route path="new-user"  element = {<p>Hey! Welcome new-user</p>} />
          </Route>

          <Route path="/products" element={<Product />} />

          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/products/edit" element={<div>kubeki</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
