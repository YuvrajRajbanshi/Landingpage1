import React from "react";
import Navbar from "./navigation/Navbar";
import { PiMedalBold } from "react-icons/pi";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="text-white md:px-56 mt-14 p-5 ">
        <h2 className="border border-white  p-2  rounded-3xl md:text-xl   ">
          We just launched community cross-collaboration Hub with resource
          template and live events 🎉 -{" "}
          <span className="text-blue-500">check it out</span>
        </h2>
        <h1
          className="text-4xl text-center mt-10 font-bold font-serif md:text-7xl
        "
        >
          Community & business data, centralized
        </h1>

        <p className="mt-5 text-center font-sans text-[16px]">
          Showcase the value of your community to the business. Talkbase sets
          the stage for successful cross-collaboration among community teams
          working with customer, marketing, sales and product development.
        </p>
      </div>
      <div className="mt-5 flex justify-center gap-5 ">
        <button className="bg-blue-600 py-3 rounded-lg px-2 py ">
          Get Started for free
        </button>
        <button className="bg-white py-3 px-5 rounded-lg text-black ">
          Book a Demo
        </button>
      </div>

      <div className=" flex justify-center text-black mt-8">
        <button
          className=" border-red-600 border-2 rounded-lg bg-white  flex  gap-5 p-4
        "
        >
          <span className="text-4xl">🥈</span>
          <span className="text-red-500 font-bold text-xs">
            <p>PRODUCT HUNT</p>
            <p>#2 Product of the day </p>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
