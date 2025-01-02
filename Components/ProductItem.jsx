import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Slices/CartSlice';


export default function ProductItem() {
  const dispath=useDispatch();
  const handleaddtocart =(product)=>{
    dispath(addtocart({productId:product.id,Product:product}))
    
  }
  const navigate = useNavigate();
    const [data, setdata] = useState([]);
    useEffect(() => {
      fetch("../AllProducts.json").then((response) => {
        response.json().then((data) => setdata(data));
      });
    }, []);
  const [visibleCount, setVisibleCount] = useState(4); 

  const showMore = () => {
    setVisibleCount((prev) => prev + 4); 
  };

  return (
    <div className="flex flex-col items-center gap-6 ">
   
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 min-h-[23vh] -ml-16 sm:-ml-0 mt-4 item-center">
        {data.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            className="w-56 md:w-80 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-md md:mr-0" 
            onClick={() =>  navigate(`/products/${item.id}`)}
          >
         
            <div className="relative w-full h-60 flex items-center justify-center bg-gray-100">
              <img
                src={item.imageURL}
                alt="Product Image"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="p-4">
              
              <span
                className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full mb-3 ${
                  item.availability === 'Newly Released'
                    ? 'bg-green-500'
                    : 'bg-blue-500'
                }`}
              >
                {item.availability}
              </span>

           
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 mt-1 capitalize">
                {item.category}
              </p>

            
              <div className="flex items-center mt-3">
                <div className="flex text-yellow-400">
                 
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        index < Math.round(item.rating || 4.5)
                          ? 'fill-current'
                          : 'fill-none stroke-current'
                      }`}
                      viewBox="0 0 20 20"
                      stroke="currentColor"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.675h4.908c.969 0 1.371 1.24.588 1.81l-3.975 2.89 1.518 4.675c.3.921-.755 1.688-1.54 1.11L10 14.347l-3.97 2.84c-.785.578-1.84-.19-1.54-1.11l1.518-4.675-3.975-2.89c-.783-.57-.381-1.81.588-1.81h4.908L9.05 2.927z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  ({item.rating || '4.5'})
                </span>
              </div>

           
              <div className="mt-4">
                <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300" onClick={(e)=>{handleaddtocart(item); e.stopPropagation()}}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    
      {visibleCount < data.length && (
        <button
          onClick={showMore}
          className="mt-6 py-2 px-6 bg-gray-800 text-white rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-400"
        >
          Show More
        </button>
      )}
    </div>
  );
}
