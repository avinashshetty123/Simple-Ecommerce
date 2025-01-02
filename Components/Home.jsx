import React, { useState } from "react";
import { Link } from "react-router-dom";
const images = import.meta.glob("../images/slideshow/*.{jpeg,jpg}", {
  eager: true,
});
const headers=Object.values(images)
import ProductItem from "./ProductItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
const headerimage = import.meta.glob("../images/Welcome/*.{jpeg,jpg}", {
  eager: true,
});
import retailer from "../images/retailer.jpg";
const sectionimages = Object.values(headerimage);

export default function Home() {
  const [deafault, setdefault] = useState("Introduction");
  const headersection={
    img1:{
      image:headers[0],
      text:'Cool Fashion',
      But:'Learn About Us',
      Link:'./stories',
      para:'One of the Simplest Website'

    },img2:{
      image:headers[1],
      text:'New Design',
      But:'Explore Products',
      Link:'./products',
      para:'One of the Simplest Website'

    },
    img3:{
      image:headers[2],
        text:'Talk With Us',
        But:'Work With Us',
        Link:'./contacts',
        para:'One of the Simplest Website'
    }

  }
  const section = {
    Introduction: {
      image: sectionimages[1],
      text: "Good Design Ideas for your fashion",
      paragraph: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    How_We_Work: {
      image: sectionimages[0],
      text: "Life at Studio",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    Capabilities: {
      image: sectionimages[0],
      text: "What can help you?",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  };
  return (
    <>
      <Swiper
    className='flex justify-center items-center'
    modules={[Navigation, Pagination, Autoplay]}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 5000 }}
    loop={true}

      spaceBetween={50}
      slidesPerView={1}
      onSwiper={(swiper) => console.log('Swiper initialized:', swiper)}
    >
      <div className="h-[90vh]">

      {Object.values(headersection).map((header, index) => (
        <SwiperSlide key={index} className='flex-container justify-center items-center '>
          <h1 className="z-10 text-white relative top-[10vh] left-[8vw] md:top-[40vh] md:left-[10vw] md:text-6xl font-extrabold">{header.text}</h1>
          <p className="z-10 text-white relative top-[12vh] left-[8vw] md:top-[42vh] md:left-[10vw] md:text-3xl "> {header.para}</p>
          <Link to={header.Link}><button className="z-10 text-white relative top-[14vh] left-[8vw] md:top-[46vh] md:left-[10vw] md:text-2xl text-sm p-1 border-2 border-orange-500 hover:border-red-500 bg-black md:p-4 rounded-3xl hover:bg-orange-500">{header.But}</button></Link>
          <img src={header.image.default} alt={`Slide ${index + 1}`} className="w-full max-h-[100vh] lg:max-w-[100vw] -mt-[10vh] sm:-mt-[30vh] md:-mt-40 -z-40 p-4 object-center ml-7 mr-10" />
        </SwiperSlide>
      ))}
      </div>
    </Swiper>


      <h1 className="text-center text-3xl font-bold p-3">
        Get Started With Small{" "}
        <span className="bg-gradient-to-t from-blue-500 to-blue-700 text-transparent bg-clip-text">
          Shop
        </span></h1>  
    
    
      <div className="flex  flex-col md:flex-row justify-center items-center mt-3 md:mt-10 gap-12">
        <div className="flex flex-col list-none h-36 p-6 ml-3 min-w-48 gap-5">
          <li
            className={`${deafault === "Introduction" ? 'font-bold text-blue-500 border-b-2 border-y-amber-500 border-blue-500' : 'hover:text-red-700'
          } cursor-pointer py-2 transition-colors duration-300`}
            onClick={() => setdefault("Introduction")}
          >
            Introduction
          </li>
          <li
            className={`${deafault === "How_We_Work" ? 'font-bold text-blue-500 border-b-2 border-y-amber-500 border-blue-500' : 'hover:text-red-700'
          } cursor-pointer py-2 transition-colors duration-300`}
            onClick={() => setdefault("How_We_Work")}
          >
            How we Work?
          </li>
          <li
            className={`${deafault === "Capabilities" ? 'font-bold text-blue-500 border-b-2 border-y-amber-500 border-blue-500' : 'hover:text-red-700'
          } cursor-pointer py-2 transition-colors duration-300`}
            onClick={() => setdefault("Capabilities")}
          >
            Capabilities
          </li>
        </div>
        <div className="flex justify-center items-center w-screen">
          <img
            src={section[deafault].image.default}
            alt={section[deafault].text}
          />
        </div>
        <div className="flex-container flex-col justify-center items-center">
          <h1 className="text-center font-bold text-xl md:text-2xl p-3">{section[deafault].text}</h1>
          <p className="text-wrap flex-1 p-4">{section[deafault].paragraph}</p>
          <Link to='/products' className="flex justify-center relative after:content-['->'] after:hidden hover:after:block hover:text-orange-400 font-bold">Check Our Products</Link>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center bg-blue-100 mt-12">
        <img src={retailer} alt="reatailer" className="object-contain md:max-h-[60vh] md:ml-14 md:mt-12 p-4" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center font-bold text-xl md:text-4xl p-3">Become a <span className="bg-gradient-to-t from-blue-500 to-blue-700 text-transparent bg-clip-text"> Retailer</span></h1>
          <p className="text-wrap flex-1 p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <Link to='/contacts' className="flex justify-center relative after:content-['->'] after:hidden hover:after:block hover:text-orange-400 font-bold">Contact Us</Link>
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
