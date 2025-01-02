import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import { addmutipletocart, addtocart } from "../Slices/CartSlice";
import { useDispatch } from "react-redux";

export default function ProductDetails() {
  const dispatch = useDispatch();

  

  const handleMultipleAddToCart = (product, quantity) => {
    dispatch(addmutipletocart({ productId: product.id, Product: product, quantity }));
  };

  const { id } = useParams(); 
  const [data, setData] = useState([]);
  const [product, setProduct] = useState(null); 
  const [quantity, setQuantity] = useState(1); 
  
  useEffect(() => {
    // Fetch the products data
    fetch("https://fakestores.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data); 
        const selectedProduct = data.find((item) => item.id === id); 
        setProduct(selectedProduct); 
      });
  }, [id]);

  if (!product) {
    return <p>Loading...</p>; 
  }

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-around bg-blue-100 min-h-[40vh]">
        <h1 className="md:text-6xl text-3xl bg-gradient-to-tr from-red-300 to-red-500 bg-clip-text text-transparent font-extrabold p-3">
          Choose your
          <p className="text-black">favorite stuffs</p>
        </h1>
      </div>

      <div className="flex md:flex-row flex-col justify-around bg-red-50 mt-5">
        <div className="flex flex-col">
          <img
            src={product.imageURL}
            alt={product.title}
            className="max-w-96 min-h-64 object-contain"
          /> 
        </div>

        <div className="flex flex-col max-w-3xl gap-2">
          <h1 className="md:text-3xl text-2xl font-bold">{product.title}</h1>
          <p className="md:text-2xl text-xl font-bold text-gray-600">{product.category}</p>
          <p className="text-xl text-wrap font-bold text-left">Description</p>
          <p className="text-xl text-gray-400">{product.description}</p> 
          <p className="text-xl font-semibold">Price: <span className="font-light text-gray-600">${product.price}</span></p>
          <p className="text-xl font-semibold">Availability: <span className="font-light text-gray-600">{product.availability}</span></p>
          <p className="text-xl font-semibold">Rating: <span className="font-light text-gray-600">{product.rating}</span></p>
          <p className="text-xl font-semibold">Product Type: <span className="font-light text-gray-600">{product.productType}</span></p>
          <p className="text-xl font-semibold">Seller: <span className="font-light text-gray-600">{product.seller}</span></p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 p-4">
            <span className="text-xl font-semibold">Quantity:</span>
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)} 
              className="block w-full sm:w-32 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>

            <button
              onClick={() => handleMultipleAddToCart(product, quantity)}
              className="w-full sm:w-auto px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <ProductItem />
    </>
  );
}
