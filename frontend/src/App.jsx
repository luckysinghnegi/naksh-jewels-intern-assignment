import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Products from "./pages/Product";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
