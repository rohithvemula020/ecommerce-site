import React from "react";
import { Delete } from "@mui/icons-material";
import { useSnackbar } from "notistack";

const CartItem = ({ item, incrementItem, decrementItem, removeItemFromCart }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleRemoveItem = () => {
    removeItemFromCart(item.id);
    enqueueSnackbar(`Item removed from your cart!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  return (
    <div className="flex items-center p-5 justify-between bg-blue-100 mt-2 mb-2 rounded-xl">
      <div className="flex p-3">
        <img src={item.image} className="h-28 rounded-lg" alt={item.title} />
        <div className="ml-10 self-start space-y-5">
          <h1 className="text-xl text-blue-700 font-semibold">{item.title}</h1>
          <p>${item.price}</p>
          <div className="flex items-center">
            <button
              onClick={() => decrementItem(item.id)}
              className="bg-red-400 px-3 mx-1 py-1 rounded-l-lg"
            >
              -
            </button>
            <span className="px-3 py-1 bg-gray-200">{item.quantity}</span>
            <button
              onClick={() => incrementItem(item.id)}
              className="bg-green-400 mx-1 px-3 py-1 rounded-r-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={handleRemoveItem}
        className="bg-blue-300 hover:bg-blue-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
      >
        <Delete className="text-gray-800" />
      </div>
    </div>
  );
};

export default CartItem;
