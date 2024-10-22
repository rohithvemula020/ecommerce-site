import HomePage from "./pages/HomePage";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const toggleFavorite = (product) => {
    const isFavorite = favorites.some((fav) => fav.id === product.id);
    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== product.id);
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favorites, product];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <Router>
      <SnackbarProvider
        TransitionComponent={Slide}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage onToggleFavorite={toggleFavorite} favorites={favorites} />} />
          <Route path="/wishlist" element={<Wishlist favorites={favorites} />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </SnackbarProvider>
    </Router>
  );
};

export default App;
