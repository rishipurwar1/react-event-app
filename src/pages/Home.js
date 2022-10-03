import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col-reverse xl:flex-row justify-between items-center px-7 py-24 sm:px-44 sm:py-28">
      <Link
        to="/create"
        className="inline-block xl:hidden text-xl text-white bg-gradient-to-r from-gradientOne to-gradientTwo py-4 px-16 mt-14 rounded-xl"
      >
        🎉 Create my event
      </Link>
      <div>
        <img src="/assets/hero.svg" alt="hero" />
      </div>

      <div className="flex flex-col font-bold text-6xl leading-[64px] text-center xl:text-right">
        <span className="text-primary">Imagine if</span>
        <span className="bg-gradient-to-r from-gradientOne to-gradientTwo bg-clip-text text-transparent">
          Snapchat
        </span>
        <span className="text-primary">had events.</span>
        <p className="text-2xl font-light text-secondary mt-4 mb-12">
          Easily host and share events with your friends <br /> across any
          social media.
        </p>
        <Link
          to="/create"
          className="hidden xl:inline text-xl text-white self-end bg-gradient-to-r from-gradientOne to-gradientTwo py-4 px-16 rounded-xl"
        >
          🎉 Create my event
        </Link>
      </div>
    </div>
  );
};

export default Home;
