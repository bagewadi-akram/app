import "./App.css";
import Header from "./Header/Header";
import Footer from "./Header/Footer";
import Inventory from "./Inventory/Inventory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Seller from "./Seller/Seller";
import AddProduct from "./Seller/AddProduct";
import DetailedProduct from "./Inventory/DetailedProduct";
import Profile from "./Auth/Profile";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import {SellerSignIn, SellerSignUp}  from "./Seller/Login";
import Cart from "./Cart/Cart";
import FilteredProducts from "./Inventory/FilteredProducts";

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
            path="/signIn"
            element={
              <>
                <Header />
                <SignIn />
                {/* <Footer /> */}
              </>
            }
          />
          <Route
            path="/sellerSignIn"
            element={
              <>
                <Header />
                <SellerSignIn />
                {/* <Footer /> */}
              </>
            }
          />
          <Route
            path="/sellerSignUp"
            element={
              <>
                <Header />
                <SellerSignUp />
                {/* <Footer /> */}
              </>
            }
          />
          <Route
            path="/filteredProducts"
            element={
              <>
                <Header />
                <FilteredProducts />
                {/* <Footer /> */}
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Header />
                <SignUp />
                {/* <Footer /> */}
              </>
            }
          />{" "}
          <Route
            path="/profile"
            element={
              <>
                <Header />
                <Profile />
                {/* <Footer /> */}
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
