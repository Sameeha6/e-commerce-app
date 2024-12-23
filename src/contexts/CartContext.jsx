import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useUser } from "./UserContext";
import { getUserbyId } from "../api/userApi";
import { updateCart } from "../api/productApi";

// Create CartContext
const CartContext = createContext();

// CartProvider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [newuser,setNewuser] = useState();
//   const [orders, setOrders] = useState([]);
const [totalPrice, setTotalPrice] = useState(0);
  const { user } = useUser();
  const userId = localStorage.getItem('userId')


const fetchUser = async (userId) => {
    try {
      const userData = await getUserbyId(userId);
      setNewuser(userData)
      setCart(userData.cart || [])
    } catch (error) {
      console.log("Error fetching user data:",error);
    }
  };

  useEffect(() => {
    if(userId){
      fetchUser(userId)
    }
  }, [userId])

  const totalCartPrice =  useCallback(() =>{
    const total = cart.reduce((total, item) => total + item.price * item.qty, 0);
    setTotalPrice(total);
  },[cart]);

  useEffect(() => {
    totalCartPrice()
  }, [cart,totalCartPrice])

const updateServerCart = async (cartData) => {
    try {
      const updatedUser = {...user,cart:cartData}
      await updateCart(user.id,updatedUser);
      setCart(cartData);
    } catch (error) {
      console.log("Error updating cart:",error);        
    }
}



const addToCart = async (product , qty = 1) => {
    const existingitem = cart.find(item => item.id === product.id);
    let cartData;
    if(existingitem){
        cartData = cart.map(item =>( item.id === product.id ? {...item,qty : item.qty + qty}:item))
    }else{
        cartData = [...cart, {...product, qty}];
    }
    updateServerCart(cartData);
}



const removeFromCart = async (productId) => {
  const cartData = cart.filter(item => item.id !== productId);
  updateServerCart(cartData);
};

const clearCart = () => {
  setTotalPrice(0);
  updateServerCart([]);
};

const updateQuantity = (productId, amount) => {
  const updatedCart = cart.map(item =>
    item.id === productId ? { ...item, qty:  Math.max(1, item.qty + amount) } : item
  )
  .filter(item => item.qty > 0);
  updateServerCart(updatedCart);
};

  return (
    <CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart,updateQuantity,totalPrice}}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for ease of use
export const useCart = () => useContext(CartContext);