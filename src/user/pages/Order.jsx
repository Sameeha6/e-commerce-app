import React, { useEffect, useState } from "react";
// import { useUser } from "../../contexts/UserContext";
import { OrdersByUserId } from "../../api/userApi";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  // const { email } = useUser();
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem('userId');
  const {cart} = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    OrdersByUserId(userId)
    .then((res) => setOrders(res))
    .catch((err) => console.error("Error fetching orders:", err));
  }, [cart,userId]);
  

  if (!userId) return <p>Please log in to view orders</p>;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      {orders.length > 0 ? (
        orders.map((order) => (
      //     <div key={order.id} className="border p-4 mb-4 rounded shadow">
      //       <p><strong>Order ID:</strong> {order.id}</p>
      //       {order.items.map((item, index) => (
      //           <li key={index} className="list-none">
      //             <div>
      //               <strong>Item:</strong> {item.name}
      //             </div>
      //             <div>
      //               <strong>Quantity:</strong> {item.quantity}
      //             </div>
      //           </li>
      //         ))}
      //       <p><strong>Total:</strong> ₹{order.total}</p>
      //       <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
      //       <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
      //     </div>
      //   ))
      // ) : (
      //   <p>No orders found.</p>
      // )}
      <div key={order.id} className="border p-4 mb-4 rounded shadow">
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Total:</strong> ₹{order.total}</p>
              <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
              <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
              <h3 className="font-bold mt-4">Items:</h3>
            <table className="table-auto w-full text-left ">
              <thead>
                <tr className="">
                  <th className="border border-gray-200 px-4 py-2">Product</th>
                  <th className="border border-gray-200 px-4 py-2">Image</th>
                  <th className="border border-gray-200 px-4 py-2">Price</th>
                  <th className="border border-gray-200 px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.items && order.items.length > 0 ? (
                  order.items.map((item) => (
                    <tr key={item.id}>
                      <td className="border border-gray-200 px-4 py-2">{item.name}</td>
                      <td className="border border-gray-200 px-4 py-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-contain"
                          onClick={() => navigate(`/product-details/${item.id}`)}
                        />
                      </td>
                      <td className="border border-gray-200 px-4 py-2">{item.qty} x {item.price}</td>
                      <td className="border border-gray-200 px-4 py-2">₹{item.qty * item.price}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="border border-gray-200 px-4 py-2 text-center">
                      No items in this order.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            </div>
          ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Orders;

//npx json-server --watch order.json --port 5001
