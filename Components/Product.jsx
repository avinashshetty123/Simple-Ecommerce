import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export default function Product() {

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-around bg-blue-100 min-h-[60vh]">
        <h1 className="md:text-6xl text-3xl bg-gradient-to-tr from-red-300 to-red-500 bg-clip-text text-transparent font-extrabold p-3">
          Choose your
          <p className="text-black"> favorite stuffs</p>
        </h1>
      </div>
      <div className="flex flex-col items-start p-6 ml-20 justify-start  min-h-[50vh]">
        <div className="self-start relative  font-bold ">
          <h2 className="text-3xl ">
            Let's{" "}
            <span className="bg-gradient-to-tr from-red-300 to-red-500 bg-clip-text text-transparent font-semibold">
              Begin
            </span>
          </h2>
          <ProductItem />
        </div>
      </div>
      <div className="flex flex-col items-start p-6 ml-20 justify-start  min-h-[50vh]">
        <div className="self-start relative  font-bold ">
          <h2 className="text-3xl ">
            Popular{" "}
            <span className="bg-gradient-to-tr from-red-300 to-red-500 bg-clip-text text-transparent font-semibold">
              Items
            </span>
          </h2> 
          <ProductItem />
        </div>
      </div>
    </>
  );
}
