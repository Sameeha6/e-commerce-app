import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams to access URL parameters
import { useCart } from "../../contexts/CartContext";
import { getProductbyId } from "../../api/productApi";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Fetch product data based on the ID from the URL
  //   axios
  //     .get(`http://localhost:5000/mobiles/${id}`)
  //     .then((response) => {
  //       setProduct(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching product details!", error);
  //     });
  // }, [id]); // Re-fetch when the product ID changes

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductbyId(id); // Use the function from ProductApi.js
        setProduct(response.data); // Set the product data
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);


  if (!product) return <div>Loading...</div>;
  if (loading) return <p className="text-center my-10">Loading...</p>;
  if (error) return <p className="text-center my-10 text-red-500">{error}</p>;

  return (
    <div className="product-details container mx-auto py-4 px-4 md:px-16">
      {product && (
        <>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain max-w-sm"
          />
        </div>
        <div className="md:w-1/2 md:pl-4 md:pt-10 max-w-xs ">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2 leading tight">{product.description}</p>
          <p className="text-xl font-semibold mt-2">₹{product.price}</p>
          <button 
            className="bg-orange-500 text-white px-2 py-1 rounded-full hover:bg-orange-600 mt-4"
            onClick={(e) =>{
              e.preventDefault()
              addToCart(product)
              alert(`Added ${product.name} to the cart`)}}>
            Add to Cart
          </button>
        </div>
      </div>
      </>
      )}
    </div>
  );
};

export default ProductDetails;