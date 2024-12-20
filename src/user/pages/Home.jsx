import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { useCart} from "../../contexts/CartContext";
import { getAllProduct } from "../../api/productApi";


const Home = () => {
  const [mobiles, setMobiles] = useState([]);
  const [error, setError] = useState("");
  const { addToCart } = useCart()

  // useEffect(() => {
  //   // Fetching data from the JSON server
  //   axios
  //     .get("http://localhost:5000/mobiles")
  //     .then((response) => {
  //       setMobiles(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error fetching the data!", error);
  //     });
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProduct(); // Use the function from ProductApi.js
        setMobiles(response.data); // Response contains the products
      } catch (error) {
        console.error("Failed to fetch products: ", error);
        setError("Error fetching product details");
      }
    };

    fetchProducts();
  }, []);


  return (
    <div className="container mx-auto p-4">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {mobiles.map((mobile) => (
          <Link to={`/product/${mobile.id}`}  key={mobile.id} >
            <div className="bg-white p-4 rounded-md shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105 flex flex-col">
                <div className="w-full h-40 sm:h-40 md:h-48 lg:h-52 overflow-hidden rounded-lg flex justify-center">
                    <img
                    src={mobile.image}
                    alt={mobile.name}
                    className="w-full h-full object-contain "
                    />
                </div>
                <div className="flex flex-col flex-grow">
                <h2 className="text-base font-semibold mt-4">{mobile.name}</h2>
                <p className="text-gray-600 mt-1 truncate text-xs">{mobile.description}</p>
                <div className="flex justify-between items-center mt-4">
                <span className="text-xs font-bold">₹{mobile.price}</span>
                <button 
                  className="bg-orange-500 text-white px-1 py-2 rounded-full hover:bg-orange-600 min-w-[80px] text-xs"
                  onClick={(e) =>{
                    e.preventDefault()
                    addToCart(mobile)
                    alert(`Added ${mobile.name} to the cart`)}}>
                    Add to Cart
                </button>
                </div>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;