import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    // Fetching data from the JSON server
    axios
      .get("http://localhost:5000/mobiles")
      .then((response) => {
        setMobiles(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="container mx-auto py-4 px-16">
      {/* <h1 className="text-xl font-bold">Featured Mobile Phones</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {mobiles.map((mobile) => (
          <div key={mobile.id} className="bg-white p-4 rounded-md shadow-xl transition duration-200 flex flex-col">
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
              <span className="text-xs font-bold">{mobile.price}</span>
              <button className="bg-orange-500 text-white px-1 py-2 rounded-full hover:bg-orange-600 min-w-[80px] text-xs">
                Add to Cart
              </button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

