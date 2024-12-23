import React from "react";
import { useCart } from "../../contexts/CartContext";
import { useNavigate,Link } from "react-router-dom"; 
import { useUser } from "../../contexts/UserContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity,totalPrice } = useCart();
  const navigate = useNavigate();
  const { user } = useUser();

//   const getTotalPrice = () =>
//     cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if(cart.length === 0){
        alert("Your cart is empty.")
    }
    navigate("/checkout");
  };

  if (!user) return <p>Please log in to view your cart.</p>;

  return (
    <div className="max-w-5xl mx-auto py-4 px-2">
      {/* <h2 className="text-lg font-bold mb-4">Shopping Cart</h2> */}
      {cart.length > 0 ? (
        <>
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border-b py-2"
            >
              <div className="flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-contain mr-4"
                />
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p>₹{product.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(product.id, -1)}
                  className="text-lg text-gray-900 px-2 py-1 rounded hover:text-gray-950"
                  disabled={product.quantity <= 1}
                >
                  -
                </button>
                <span className="text-lg font-semibold">{product.qty}</span>
                <button
                  onClick={() => updateQuantity(product.id, 1)}
                  className=" text-gray-900 px-2 py-1 rounded hover:text-gray-950"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-2 flex justify-between items-center">
            <h3 className="text-lg font-bold">Total: ₹{totalPrice}</h3>
            <div className="space-x-4">
              <button
                onClick={clearCart}
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        // 
        <div className="flex flex-col items-center p-4">
      <img
        src="https://cdn-icons-png.flaticon.com/512/13543/13543366.png"
        alt="Empty Cart"
        className="w-52 h-52 object-contain"
      />
      <h2 className="text-2xl font-semibold text-gray-700">Your Cart is Empty!</h2>
      <p className="text-gray-500 mt-2 text-center max-w-md">
        It seems like you haven’t added anything to your cart yet. Don’t miss out on amazing deals—start shopping now!
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-orange-600 transition-all"
      >
        Shop Now
      </Link>
    </div>
      )}
    </div>
  );
};

export default Cart;