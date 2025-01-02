import React from "react";
import { NavLink } from "react-router-dom";
import hamburger from "../images/Madeon/Hamburger.svg";
import { useState } from "react";
import cartimage from '../images/Madeon/cart.svg'

export default function Header() {
    const[useMenu, setMenu] = useState(false);
    const toggleMenu=()=>{
        setMenu(!useMenu)
    }
  return (
    <>
      <div className="header bg-orange-100 flex justify-between items-center p-6 h-20 w-full fixed top-0 z-50">
        <div className="Name text-2xl text-nowrap">
          <h1>
            Small{" "}
            <span className="bg-gradient-to-t from-blue-500 to-blue-700 text-transparent bg-clip-text">
              Shop
            </span>
          </h1>
        </div>
        <img src={hamburger} alt="icon" className="h-6 w-6  md:hidden self-end relative left-20 md:relative md:-right-full" onClick={toggleMenu}/>
        <div className={`Links ${
            useMenu ? "flex" : "hidden"
          } flex-col md:flex md:flex-row justify-start md:justify-between items-start md:items-center absolute md:static top-20 left-0 w-full md:w-auto bg-orange-100 md:bg-transparent p-4 md:p-0 transition-all ease-in-out duration-300`}>
          <ul className="main flex flex-col md:flex-row md:space-x-5 list-none w-full md:w-auto space-y-4 md:space-y-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-gray-500 hover:text-red-500"
                }
              >
                Home
              </NavLink>
            </li>
   
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-gray-500 hover:text-red-500"
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stories"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-gray-500 hover:text-red-500"
                }
              >
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-gray-500 hover:text-red-500"
                }
              >
                Contact Us &nbsp;
              </NavLink>
            </li>
          </ul>
        </div>
          <ul className="flex md:space-x-8 list-none w-full md:w-auto space-y-4 md:space-y-0 self-end justify-end items-end">
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-gray-500 hover:text-red-500"
                }
              >
                <img src={cartimage} alt="cartimage" className="max-w-12 max-h-8" />
              </NavLink>
            </li>
         
          </ul>
      </div>
    </>
  );
}
