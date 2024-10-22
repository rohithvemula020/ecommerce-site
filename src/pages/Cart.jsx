import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCartItems, removeFromCart, incrementQuantity, decrementQuantity } from "../utils/localStorageUtils"; // Import the functions

const Cart = () => {
  const [cart, setCart] = useState(getCartItems()); // Fetch cart items from localStorage
  const [totalAmount, setTotalAmount] = useState(0);

  // Update total amount when cart changes
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0));
  }, [cart]);

  // Increment product quantity
  const handleIncrement = (productId) => {
    incrementQuantity(productId);
    setCart(getCartItems()); // Update the cart state
  };

  // Decrement product quantity
  const handleDecrement = (productId) => {
    decrementQuantity(productId);
    setCart(getCartItems()); // Update the cart state
  };

  // Remove item from cart
  const handleRemoveItem = (id) => {
    removeFromCart(id);
    setCart(getCartItems()); // Update the cart state
  };

  // Empty the entire cart
  const emptyCart = () => {
    localStorage.removeItem("cart");
    setCart([]); // Clear the cart state
  };

  return (
    <>
      {cart.length > 0 ? (
        <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-between p-2">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="text-gray-600">
                    ${item.price} x {item.quantity}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-400 px-2 py-1 text-white rounded"
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="bg-yellow-500 hover:bg-yellow-400 px-2 py-1 text-white rounded"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="p-5">
            <h1 className="font-semibold text-lg text-purple-800">YOUR CART SUMMARY</h1>
            <p>
              <span className="text-gray-700 font-semibold">Total Items</span>:{" "}
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </p>
            <p>
              <span className="text-gray-700 font-semibold">Total Amount</span>: $
              {totalAmount.toFixed(2)}
            </p>
            <Link to="/checkout">
              <button className="bg-purple-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-bold hover:text-purple-700 p-3">
                Checkout Now
              </button>
            </Link>
            <button
              className="bg-red-500 hover:bg-red-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-red-600 font-bold hover:text-red-700 p-3"
              onClick={emptyCart}
            >
              Empty Cart
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">Your cart is empty!</h1>
          <Link to="/products">
            <button className="bg-purple-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-bold hover:text-purple-700 p-3">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
