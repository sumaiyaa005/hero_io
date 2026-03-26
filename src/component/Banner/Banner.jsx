import React from "react";
import BannerImg from "../../assets/hero.png";
import GoogleplayImg from "../../assets/google-play.png";
import AppstoreImg from "../../assets/app-store.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <div className="pt-10 sm:pt-12 md:pt-16 lg:pt-15 px-4 sm:px-6 lg:px-8">
        {/* banner start */}
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold leading-tight max-w-4xl">
            We Build<br></br>
            <span className="font-bolder  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive{" "}
            </span>
            Apps
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl px-2">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.
            <br className="hidden sm:block" /> Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 lg:gap-0 mt-2 w-full max-w-xs sm:max-w-md justify-center">
            <Link
              to="https://play.google.com/store/apps?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline border border-gray-400 hover:border-gray-500 hover:bg-gray-50 w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 text-sm sm:text-base">
                <img
                  className="w-7 h-7 sm:w-8 sm:h-8"
                  src={GoogleplayImg}
                  alt="Google Play"
                />
                Google Play
              </button>
            </Link>

            <Link
              to="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline border border-gray-400 hover:border-gray-500 hover:bg-gray-50 w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 text-sm sm:text-base">
                <img
                  className="w-7 h-7 sm:w-8 sm:h-8"
                  src={AppstoreImg}
                  alt="App Store"
                />
                App Store
              </button>
            </Link>
          </div>

          {/* Banner Image */}
          <div className="mt-6 sm:mt-10 w-full flex justify-center">
            <img
              src={BannerImg}
              alt="Hero Banner"
              className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[580px] xl:max-w-[650px] h-auto object-contain"
            />
          </div>
        </div>
        {/* banner end */}
      </div>
      {/* trusted */}
      <div className="text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-6 sm:py-8 md:py-10 text-white">
        <h1 className="font-bold text-4xl sm:text-3xl md:text-4xl px-4 tracking-wide">
          Trusted by Millions, Built for You
        </h1>
        <div className="stats stats-vertical lg:stats-horizontal mt-5 sm:mt-6 md:mt-7 justify-center gap-5 sm:gap-7 lg:gap-10">
          <div className="stat place-items-center">
            <div className="stat-title text-white">Downloads</div>
            <div className="stat-value text-4xl sm:text-4xl md:text-5xl font-extrabold mt-5 mb-5">
              29.6M
            </div>
            <div className="stat-desc text-white text-sm sm:text-base">
              21% More Than Last Month
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title text-white">Total Reviews</div>
            <div className="stat-value text-4xl sm:text-4xl md:text-5xl font-extrabold mt-5 mb-5">
              960K
            </div>
            <div className="stat-desc text-white text-sm sm:text-base">
              46% More Than Last Month
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title text-white">Active Apps</div>
            <div className="stat-value text-4xl sm:text-4xl md:text-5xl font-extrabold mt-5 mb-5">
              132+
            </div>
            <div className="stat-desc text-white text-sm sm:text-base">
              31 More Will Launch
            </div>
          </div>
        </div>
      </div>
      {/* trusted end */}
    </div>
  );
};

export default Banner;
