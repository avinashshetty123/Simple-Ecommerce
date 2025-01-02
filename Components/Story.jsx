import React, { useState } from "react";
import images from "../images/header/businessman.jpg";
const teamsimages=import.meta.glob("../images/people/*.{jpeg,jpg}",{
  eager:true
});
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
const peoples=Object.values(teamsimages);

export default function Story() {
  const [usepopup,setpopup]=useState(false);
  const[teammember,setteam]=useState(null)
  const togglepopup=(name)=>
    {

      setpopup(!usepopup)
      setteam(team[name]||null)


    }
  const team={
    Don:{
      image:peoples[0],
      name:"Don",
      position:"Product/Vp",
      header:"Over three years in business had the chance to work on variety of projects, with companies",
      about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui."
    },
    John:{
      image:peoples[1],
      name:"John",
      position:"Product/Vp",
      header:"Over three years in business had the chance to work on variety of projects, with companies",
      about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui."
    },
    Jane:{
      image:peoples[2],
      name:"Jane",
      position:"Product/Vp",
      header:"Over three years in business had the chance to work on variety of projects, with companies",
      about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui."
  }}
  const reviews={
    review1:{
      said:'Over three years in business had the chance to work on variety of projects, with companies',
      image:peoples[0],
      name:"Don Smith",
      position:"Product/Vp",
     
    },
    review2:{
      said:"Over three years in business had the chance to work on variety of projects, with companies",
      image:peoples[1],
      name:"John Doe",
      position:"Product/Vp",
      
    },
    review3:{
      said:"Over three years in business had the chance to work on variety of projects, with companies",
      image:peoples[2],
      name:"Jane Froster",
      position:"Product/Vp",
    
  }
}
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-around bg-blue-100">
        <h1 className="md:text-6xl text-3xl bg-gradient-to-tr from-red-300 to-red-500 bg-clip-text text-transparent font-extrabold p-3">
          Company <p className="text-black">Fashion</p>
        </h1>
        <img
          src={images}
          alt="business_mans"
          className="md:w-1/2 w-4/5 mr-10 md:mr-0 self-end p-2 max-h-[70vh]"
        />
      </div>
      <div className="bg-gray-200 flex flex-col items-center justify-center p-5 min-h-[50vh]">
        <div className="flex self-start justify-self-start">
          <h2 className="text-3xl ">
            Meet Our{" "}
            <span className="bg-gradient-to-tr from-red-300 to-red-500 bg-clip-text text-transparent font-semibold">
              Team
            </span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-4 items-center border-2 p-6 md:min-w-[100vw] md:p-12 mt-8 ">
        {Object.values(team).map((person, index) => (
       
            <div
              key={index}
              className="flex flex-row items-center border-2 border-red-400 p-4 rounded-lg bg-white shadow-md max-w-[80vw] md:min-w-[20vw] justify-between gap-4 md:gap-12 md:p-16"
            >
        
              <img
                src={person.image.default}
                alt={person.name}
                className="rounded-full max-w-[20vw] md:max-w-[13vw] max-h-[10vh] object-contain"
              />
          
              <div className="flex flex-col text-center mt-4">
                <h3 className="font-bold text-lg">{person.name}</h3>
                <h4 className="text-gray-600">{person.position}</h4>
              </div>
          
              <div className="mt-4 border-2 border-red h-10 flex items-center bg-gray-400 rounded-lg w-10 justify-center">
                <button className="border-2 border-red-400 p-2 rounded-full bg-slate-200 h-2 w-2 flex items-center justify-center text-white hover:text-black" onClick={()=>{togglepopup(person.name)}} >
                  +
                </button>
              </div>
            </div>
          ))}
            </div>
            </div>
            
            {usepopup && teammember &&(
  <div className="min-w-[90vw] md:min-h-[60vh] md:min-w-[40vw] flex justify-center border-2 border-red-500 bg-white p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <button
      className="absolute top-2 right-2 text-4xl hover:text-red-400"
      onClick={() => togglepopup(null)}
    >
      X
    </button>
    <div className="flex flex-col items-center justify-center p-5 ">
      <img
        src={teammember.image.default}
        alt={teammember.name}
        className=" max-w-[30vw] max-h-[25vh] object-contain rounded-full shadow-md"
      />
      <h3 className="font-extrabold text-xl">{teammember.name}</h3>
      <h4 className="text-gray-600">{teammember.position}</h4>
      <hr className="border-b-2 border-gray-400"></hr>
      <p className="text-center font-bold text-pretty">{teammember.header}</p>
      <p className="text-center">{teammember.about}</p>
    </div>
  </div>
)}

<h1 className="md:text-4xl text-2xl bg-gradient-to-tr from-red-300 to-red-500 bg-clip-text text-transparent font-extrabold p-3 text-center">
Customer love,
 <p className="text-black">Small Shop</p>
        </h1>

    <Swiper
  className="flex justify-center items-center"
  modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 5000 }}
  loop={true}
  spaceBetween={50}
  slidesPerView={1}
>
  {Object.values(reviews).map((review, index) => (
    <SwiperSlide
      key={index}
      >
        <p className="text-center text-wrap p-5 text-2xl text-gray-400">
          {review.said}
        </p>
      <div className="flex items-end justify-center gap-7 p-5">
      <img
        src={review.image.default}
        alt={`Slide ${index + 1}`}
        className='max-w-[15vw] max-h-[10vh] object-contain rounded-full shadow-md justify-center '
      />
        <h3 className="font-bold text-lg">{review.name},</h3>
        <p className="text-gray-500">{review.position}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>;

    </>
  );
}
