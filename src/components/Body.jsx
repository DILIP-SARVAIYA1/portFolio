import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="bg-black w-full h-screen px-0 sm:px-32 md:px-44 overflow-x-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Body;
