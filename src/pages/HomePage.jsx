import React from "react";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";


const HomePage = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleShopNow = () => {
    enqueueSnackbar("Navigating to the shop...", {
      variant: "info",
      autoHideDuration: 3000,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-extrabold text-purple-700 mt-10">
        Welcome to E-shop
      </h1>
      <h2 className="text-lg text-gray-600 mt-4">
        Continue Shopping
      </h2>
      <Link to="/products">
        <button
          onClick={handleShopNow}
          className="bg-purple-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-bold hover:text-purple-700 p-3"
        >
          SHOP NOW
        </button>
      </Link>
    
    </div>
  );
};

export default HomePage;
