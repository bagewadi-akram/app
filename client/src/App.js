import "./App.css";
import Header from "./Header/Header";
import Footer from "./Header/Footer";
import Inventory from "./Inventory/Inventory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart/Cart";
import Seller from "./Seller/Seller";
import AddProduct from "./Seller/AddProduct";
import DetailedProduct from "./Inventory/DetailedProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Inventory />
                <Footer />
              </>
            }
          />
          <Route
            path="/detailedProduct"
            element={
              <>
                <Header />
                <DetailedProduct />
                <Footer />
              </>
            }
          />
          <Route
            path="/addProduct"
            element={
              <>
                <Header />
                <AddProduct />
                <Footer />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Header />
                <Cart />
                <Footer />
              </>
            }
          />
          <Route
            path="/seller"
            element={
              <>
                <Header />
                <Seller />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
