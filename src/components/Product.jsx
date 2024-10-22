// // // // import React, { useState } from "react";
// // // // import { useSnackbar } from "notistack";
// // // // import { Favorite } from "@mui/icons-material";

// // // // const Product = ({ product, onToggleFavorite, isFavorite }) => {
// // // //   const { enqueueSnackbar } = useSnackbar();

// // // //   const addToCart = () => {
// // // //     enqueueSnackbar(`${product.title} added to your cart`, {
// // // //       variant: "success",
// // // //       autoHideDuration: 3000,
// // // //     });
// // // //   };

// // // //   return (
// // // //     <div className="group hover:scale-110 transition-transform duration-300 ease-in-out flex flex-col items-center border-2 border-pink-400 gap-3 p-4 h-[350px] m-5 rounded-xl">
// // // //       <div className="h-[180px] w-full">
// // // //         <img
// // // //           src={product.image}
// // // //           alt={product.title}
// // // //           className="h-full w-full object-cover"
// // // //         />
// // // //       </div>
// // // //       <h1 className="truncate w-full text-center text-gray-700 font-semibold text-lg">
// // // //         {product.title}
// // // //       </h1>
// // // //       <div className="flex items-center justify-between w-full mt-3 space-x-2">
// // // //         <button
// // // //           className="group-hover:bg-pink-700 group-hover:text-white transition-colors duration-300 ease-in-out text-pink-700 border-2 border-pink-700 rounded-lg font-semibold p-2"
// // // //           onClick={addToCart}
// // // //         >
// // // //           Add to cart
// // // //         </button>
// // // //         <div className="flex items-center space-x-2">
// // // //           <p className="text-gray-700 font-semibold">${product.price}</p>
// // // //           <button onClick={onToggleFavorite} className="focus:outline-none">
// // // //             <Favorite className={`text-red-500 ${isFavorite ? 'filled' : ''}`} />
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Product;



// // // import React from "react";
// // // import { useSnackbar } from "notistack";
// // // import { Favorite } from "@mui/icons-material";

// // // const Product = ({ product, onToggleFavorite, isFavorite }) => {
// // //   const { enqueueSnackbar } = useSnackbar();

// // //   const addToCart = () => {
// // //     enqueueSnackbar(`${product.title} added to your cart`, {
// // //       variant: "success",
// // //       autoHideDuration: 3000,
// // //     });
// // //   };

// // //   return (
// // //     <div className="group hover:scale-110 transition-transform duration-300 ease-in-out flex flex-col items-center border-2 border-pink-400 gap-3 p-4 h-[350px] m-5 rounded-xl">
// // //       <div className="h-[180px] w-full">
// // //         <img
// // //           src={product.image}
// // //           alt={product.title}
// // //           className="h-full w-full object-cover"
// // //         />
// // //       </div>
// // //       <h1 className="truncate w-full text-center text-gray-700 font-semibold text-lg">
// // //         {product.title}
// // //       </h1>
// // //       <div className="flex items-center justify-between w-full mt-3 space-x-2">
// // //         <button
// // //           className="group-hover:bg-pink-700 group-hover:text-white transition-colors duration-300 ease-in-out text-pink-700 border-2 border-pink-700 rounded-lg font-semibold p-2"
// // //           onClick={addToCart}
// // //         >
// // //           Add to cart
// // //         </button>
// // //         <div className="flex items-center space-x-2">
// // //           <p className="text-gray-700 font-semibold">${product.price}</p>
// // //           <button onClick={() => onToggleFavorite(product)} className="focus:outline-none">
// // //             <Favorite className={`text-red-500 ${isFavorite ? 'filled' : ''}`} />
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Product;



// // import React from "react";
// // import { useSnackbar } from "notistack";
// // import { Favorite } from "@mui/icons-material";

// // const Product = ({ product, onToggleFavorite, isFavorite }) => {
// //   const { enqueueSnackbar } = useSnackbar();

// //   const addToCart = () => {
// //     enqueueSnackbar(`${product.title} added to your cart`, {
// //       variant: "success",
// //       autoHideDuration: 3000,
// //     });
// //   };

// //   return (
// //     <div className="group hover:scale-110 transition-transform duration-300 ease-in-out flex flex-col items-center border-2 border-pink-400 gap-3 p-4 h-[350px] m-5 rounded-xl">
// //       <div className="h-[180px] w-full">
// //         <img
// //           src={product.image}
// //           alt={product.title}
// //           className="h-full w-full object-cover"
// //         />
// //       </div>
// //       <h1 className="truncate w-full text-center text-gray-700 font-semibold text-lg">
// //         {product.title}
// //       </h1>
// //       <div className="flex items-center justify-between w-full mt-3 space-x-2">
// //         <button
// //           className="group-hover:bg-pink-700 group-hover:text-white transition-colors duration-300 ease-in-out text-pink-700 border-2 border-pink-700 rounded-lg font-semibold p-2"
// //           onClick={addToCart}
// //         >
// //           Add to cart
// //         </button>
// //         <div className="flex items-center space-x-2">
// //           <p className="text-gray-700 font-semibold">${product.price}</p>
// //           <button onClick={() => onToggleFavorite(product)} className="focus:outline-none">
// //             <Favorite className={`text-red-500 ${isFavorite ? 'filled' : ''}`} />
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Product;


// import React from "react";
// import { useSnackbar } from "notistack";
// import { Favorite, FavoriteBorder, AddShoppingCart } from "@mui/icons-material";
// import {
//   addToCart,
// } from "../utils/localStorageUtils";

// const Product = ({ product, onToggleFavorite, isFavorite }) => {
//   const { enqueueSnackbar } = useSnackbar();

//   const handleAddToCart = () => {
//     addToCart(product);
//     enqueueSnackbar(`${product.title} added to your cart`, {
//       variant: "success",
//     });
//   };

//   return (
//     <div className="border rounded-lg shadow-lg p-4 m-2 max-w-xs flex flex-col">
//       <img src={product.image} alt={product.title} className="object-cover h-48 w-full" />
//       <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
//       <p className="mt-1 text-gray-600">${product.price}</p>
//       <button onClick={handleAddToCart} className="mt-3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
//         <AddShoppingCart /> Add to Cart
//       </button>
//       <button
//         onClick={() => onToggleFavorite(product)}
//         className={`mt-2 p-2 rounded transition ${isFavorite ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'}`}
//       >
//         {isFavorite ? <Favorite /> : <FavoriteBorder />} Favorite
//       </button>
//     </div>
//   );
// };

// export default Product;


import React from "react";
import { useSnackbar } from "notistack";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const Product = ({ item }) => {
  const { enqueueSnackbar } = useSnackbar();

  // Utility function to handle localStorage for cart
  const getCart = () => JSON.parse(localStorage.getItem("cart")) || [];
  const setCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));

  // Utility function to handle localStorage for favorites
  const getFavorites = () => JSON.parse(localStorage.getItem("favorites")) || [];
  const setFavorites = (favorites) => localStorage.setItem("favorites", JSON.stringify(favorites));

  const addToCart = () => {
    const cart = getCart();
    if (!cart.some((p) => p.id === item.id)) {
      cart.push({ ...item, quantity: 1 }); // Add item to cart with quantity
      setCart(cart);
      enqueueSnackbar(`Item added to your cart successfully`, {
        variant: "success",
        autoHideDuration: 3000,
      });
    }
  };

  const removeFromCart = () => {
    let cart = getCart();
    cart = cart.filter((p) => p.id !== item.id);
    setCart(cart);
    enqueueSnackbar(`Item removed from your cart!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  const toggleFavorite = () => {
    const favorites = getFavorites();
    if (favorites.some((p) => p.id === item.id)) {
      const updatedFavorites = favorites.filter((p) => p.id !== item.id);
      setFavorites(updatedFavorites);
      enqueueSnackbar(`Item removed from your favorites`, {
        variant: "warning",
        autoHideDuration: 3000,
      });
    } else {
      favorites.push(item);
      setFavorites(favorites);
      enqueueSnackbar(`Item added to your favorites`, {
        variant: "success",
        autoHideDuration: 3000,
      });
    }
  };

  const cart = getCart();
  const favorites = getFavorites();

  return (
    <div className="group hover:scale-110 transition-transform duration-300 ease-in-out flex flex-col items-center border-2 border-pink-400 gap-3 p-4 h-[350px] mt-10 ml-5 rounded-xl">
      <div className="h-[160px] w-full">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-between w-full mt-3">
        <h1 className="truncate w-full text-center text-gray-700 font-semibold text-lg">
          {item.title}
        </h1>
      </div>
      <div className="flex items-center justify-between w-full mt-3 space-x-2">
        {cart.some((p) => p.id === item.id) ? (
          <button
            className="group-hover:bg-pink-700 group-hover:text-white transition-colors duration-300 ease-in-out text-pink-700 border-2 border-pink-700 rounded-lg font-semibold p-2"
            onClick={removeFromCart}
          >
            Remove item
          </button>
        ) : (
          <button
            className="group-hover:bg-pink-700 group-hover:text-white transition-colors duration-300 ease-in-out text-pink-700 border-2 border-pink-700 rounded-lg font-semibold p-2"
            onClick={addToCart}
          >
            Add to cart
          </button>
        )}
        <div className="flex items-center space-x-2">
          <p className="text-gray-700 font-semibold">${item.price}</p>
          <button onClick={toggleFavorite} className="focus:outline-none">
            {favorites.some((p) => p.id === item.id) ? (
              <Favorite className="text-red-500" />
            ) : (
              <FavoriteBorder className="text-gray-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
