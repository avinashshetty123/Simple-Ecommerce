import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeallfromcart,addtocart,removefromcart } from "../Slices/CartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeallfromcart({ productId }));
  };
  const handleRemoveoneFromCart = (productId) => {
    dispatch(removefromcart( {productId} ));
  };
  const handleAddoneFromCart = (productId) => {
    dispatch(addtocart({ productId }));
  };
  
  const totalCount = Object.values(cartItems).reduce((acc, item) => acc + item.count, 0);
  const totalPrice = Object.values(cartItems).reduce((acc, item) => acc + (item.Product.price * item.count), 0).toFixed(2);

  return (
    <>
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Cart</h1>
      {Object.keys(cartItems).length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col items-center gap-4">
          {Object.keys(cartItems).map((itemId) => {
            const item = cartItems[itemId];
            return (
              <div
                key={itemId}
                className="flex items-center justify-between w-full max-w-md p-4 bg-white rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.Product.imageURL}
                    alt={item.Product.title}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.Product.title}</h3>
                    <p className="text-sm text-gray-500">Quantity: {item.count}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-col md:flex-row">
                <button className="text-xl hover:text-red-600 border-2 border-orange-300 p-1 rounded-full" onClick={()=>handleAddoneFromCart(itemId)}>+</button>
                <button  className="text-xl hover:text-red-600 border-2 border-orange-300 p-1 rounded-full" onClick={()=>handleRemoveoneFromCart(itemId)}>-</button>
                <button
                  className="text-white bg-red-500 md:px-4 md:py-2 rounded-lg hover:bg-red-600 px-2 py-1"
                  onClick={() => handleRemoveFromCart(itemId)}
                  >
                  Remove
                </button>
                  </div>
              </div>
            );
          })}
        </div>
      
    )}</div>
    <div className="flex flex-col items-center gap-4 p-6">  
    <p className="text-xl font-semibold mt-4">Total Items: {totalCount}</p>
    <p className="text-xl font-semibold">Total Price: ${totalPrice}</p>
    <button className="border-2 border-yellow-100 hover:border-red-300 hover:bg-black rounded-lg hover:text-white p-2"> Place An Order</button>
    </div>
    </>
        
  );
}
