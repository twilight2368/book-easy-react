import React from 'react';
import {Button} from "@material-tailwind/react";
import Pic from "./v2.png";
import Logo from "./logo.png";

const WelcomePage = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-r from-cyan-300 to-blue-300">
      <nav className="shadow-sm bg-gradient-to-r from-cyan-300 to-blue-300 dark:bg-gray-900 h-20 dark:text-white duration-200 flex justify-between items-center">
        <div></div>
        <div className="h-12">
          <Button className="bg-gray-300 text-sm font-bold  text-black px-4 py-2 rounded mr-6">Login</Button>
          <Button className="bg-blue-600  text-sm text-white px-4 py-2 rounded mr-10">Sign Up</Button>
        </div>
      </nav>
      <div className="flex flex-col-2 h-screen gap-10  items-center justify-center text-center p-4">
        <div className= "w-5/12">
        <h1 className="text-6xl font-sans text-white font-bold mb-4">Welcome to our site</h1>
        <p className="text-2xl font-semibold mb-4">
          Exchange books with fellow readers easily and discover new favorites!
        </p>
        </div>
        <img 
          src= {Pic}
          alt="Book exchange" 
          className="w-96 h-3/4"
        />
      </div>
    </div>
  );
  
}

export default WelcomePage