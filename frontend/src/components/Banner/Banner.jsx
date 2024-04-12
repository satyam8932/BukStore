import React from "react";
import bannerIMG from "/Banner.png"
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="section max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 w-full mt-20 md:mt-60">
        <div className="space-y-12">
          <h1 className="text-4xl font-bold">
            Hello Fellas, Welcomes you here to learn something{" "}
            <span className="text-warning">new everyday!!!</span>
          </h1>
          <p className="text-l">
            BukStore! welcomes you here to learn something new and improved your experience with your business  and business products, so that you can learn some sort of new skills for your business or development.
          </p>
          <div className="flex items-center gap-2">
            <label className="px-3 py-3 border rounded-lg flex items-center gap-2 md:w-1/2 w-full max-w-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="w-full outline-none bg-transparent" placeholder="Email" />
            </label>
            <Link to="/signup" className="btn btn-warning text-white">Signup</Link>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 mx-auto w-full md:mt-20">
        <img src={bannerIMG} className="bg-transparent" alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
