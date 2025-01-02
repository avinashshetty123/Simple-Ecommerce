import React from "react";
import images from "../images/header/positivewomen.jpg";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-around bg-blue-100">
        <h1 className="md:text-6xl text-3xl bg-gradient-to-tr from-red-300 to-red-500 bg-clip-text text-transparent font-extrabold p-3">
          Say hello to us <p className="text-black">love to hear you</p>
        </h1>
        <img
          src={images}
          alt="business_mans"
          className="md:w-1/2 w-4/5 mr-10 md:mr-0 self-end p-2 max-h-[70vh]"
        />
      </div>
      <div className="flex flex-col items-start p-6 ml-20 justify-start  min-h-[50vh]">
        <div className="self-start relative  font-bold ">
          <h2 className="text-3xl ">
            Let's{" "}
            <span className="bg-gradient-to-tr from-red-300 to-red-500 bg-clip-text text-transparent font-semibold">
              Begin
            </span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-col gap-5 mt-11">
          <div class="relative">
            <input
              type="text"
              id="full-name"
              class="peer placeholder-transparent focus:outline-none focus:ring-0 border-b-2 text-gray-900 w-full py-2 px-3"
              placeholder="Full Name"
            />

            <label
              for="full-name"
              class="absolute left-3 top-2 text-gray-500 transition-all transform scale-100 origin-[0] peer-focus:scale-75 peer-focus:top-0 peer-focus:text-xs peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:scale-100"
            >
              Full Name
            </label>
          </div>

          <div class="relative mb-4">
            <input
              type="email"
              id="email"
              class="peer placeholder-transparent focus:outline-none focus:ring-0 border-b-2 text-gray-900 w-full py-2 px-3"
              placeholder="Email"
            />
            <label
              for="email"
              class="absolute left-3 top-2 text-gray-500 transition-all transform scale-100 origin-[0] peer-focus:scale-75 peer-focus:top-0 peer-focus:text-xs peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:scale-100"
            >
              Email
            </label>
          </div>

          <div class="relative mb-4">
            <input
              type="text"
              id="subject"
              class="peer placeholder-transparent focus:outline-none focus:ring-0 border-b-2 text-gray-900 w-full py-2 px-3"
              placeholder="Subject"
            />
            <label
              for="subject"
              class="absolute left-3 top-2 text-gray-500 transition-all transform scale-100 origin-[0] peer-focus:scale-75 peer-focus:top-0 peer-focus:text-xs peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:scale-100"
            >
              Subject
            </label>
          </div>

          <div class="relative mb-4">
            <textarea
              id="feedback"
              class="peer placeholder-transparent focus:outline-none focus:ring-0 border-b-2 text-gray-900 w-full py-2 px-3"
              placeholder="Feedback"
            ></textarea>
            <label
              for="feedback"
              class="absolute left-3 top-2 text-gray-500 transition-all transform scale-100 origin-[0] peer-focus:scale-75 peer-focus:top-0 peer-focus:text-xs peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:scale-100"
            >
              Feedback
            </label>
          </div>
        </div>
        <button
          type="button"
          className="border-2 border-orange-300 p-4 rounded-3xl hover:border-red-600 hover:shadow-2xl"
        >
          Submit
        </button>
      </div>
    </>
  );
}
