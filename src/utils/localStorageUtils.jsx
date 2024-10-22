
export const getFavorites = () => {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  };
  
  export const addToFavorites = (product) => {
    const favorites = getFavorites();
    const updatedFavorites = [...favorites, product];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  
  export const removeFromFavorites = (productId) => {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter((item) => item.id !== productId);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };



  export const getCartItems = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };
  
  export const addToCart = (product) => {
    const cart = getCartItems();
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1; 
    } else {
      cart.push({ ...product, quantity: 1 }); 
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  


  export const incrementQuantity = (productId) => {
    const cart = getCartItems();
    const product = cart.find((item) => item.id === productId);
    if (product) {
      product.quantity += 1; 
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  
  export const decrementQuantity = (productId) => {
    const cart = getCartItems();
    const product = cart.find((item) => item.id === productId);
    if (product && product.quantity > 1) {
      product.quantity -= 1; 
    } else {
      removeFromCart(productId);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  


  // Remove product from cart
  export const removeFromCart = (productId) => {
    const cart = getCartItems();
    const updatedCart = cart.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  


  // Clear the entire cart
  export const clearCart = () => {
    localStorage.removeItem("cart");
  };
  

  // Increment product quantity
const handleIncrement = (productId) => {
    incrementQuantity(productId);
    setCart(getCartItems()); 
  };
  
  // Decrement product quantity
  const handleDecrement = (productId) => {
    decrementQuantity(productId);
    setCart(getCartItems()); 
  };