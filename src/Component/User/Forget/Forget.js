import React from "react";
import img from "../../../Images/forget.jpg";

export default function Forget() {
  return (
    <div className="h-screen bg-blue-400 w-screen flex justify-center items-center overflow-hidden">
      <div className="h-5/6 w-5/6 bg-white flex flex-col justify-center items-center lg:grid xl:grid md:grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <div className="h-2/5 lg:h-full xl-h-full md:h-full">
          <img
            src={img}
            alt="forget-img"
            className="h-full w-full xl:h-5/6 xl:w-4/5 lg:h-full lg:w-4/5"
          />
        </div>
        <div className="h-3/5 md:h-full xl:h-full lg:h-full lg:flex lg:flex-col lg:justify-center lg:items-center  xl:flex xl:flex-col xl:justify-center xl:items-center md:flex md:flex-col md:justify-center md:items-center">
          <h4 className="font-serif font-bold lg:text-2xl lg:mb-16 xl:text-2xl xl:mb-16 md:text-xl md:mb-8 text-md mb-4">
            FORGET PASSWORD
          </h4>
          <input
            type="text"
            className="bg-purple-300 h-8 md:h-10 lg:h-10 xl:h-10 mb-6 md:mb-8 lg:mb-14 xl:mb-14 pl-8 lg:w-96 xl:w-96 md:w-72 w-50 placeholder-black placeholder:font-bold rounded-xl font-md md:font-xl lg:font-2xl xl:font-2xl"
            placeholder="Email"
          />
          <div className="text-center">
            <button className="w-50 lg:w-96 xl:w-96 md:w-72  bg-purple-300 lg:h-10 xl:h-10 md:h-10 h-8 font-bold text-md rounded-xl font-serif text-blue-700 font-md md:font-xl lg:font-2xl xl:font-2xl">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
