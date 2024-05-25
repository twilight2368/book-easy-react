import React from "react";
import { Button } from "@material-tailwind/react";
import Pic from "./background.jpg";
import Logo from "./logo.png";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r dark:bg-gray-900 h-20 border-b dark:text-white duration-200 grid grid-cols-3 items-center">
        <div className="pl-16 flex items-center">
          <img src={Logo} alt="Logo" className="block h-14 mr-4" />
          <div className="madimi-one-regular text-2xl text-blue-300">
            Book Exchange
          </div>
        </div>
        <div className="col-span-2 flex justify-end pr-16">
          
          <Button className="bg-gray-300 text-sm font-bold text-black px-4 py-2 rounded mr-6">
            <Link to = "/login">Login</Link>
          </Button>
          <Button className="bg-blue-600 text-sm text-white px-4 py-2 rounded mr-10">
          <Link to = "/signup">Sign up</Link>
          </Button>
        </div>
      </div>
      <div className="bg-white py-20 flex-grow">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-6xl madimi-one-regular font-bold mb-4">Welcome to Book Exchange</h2>
            <p className="my-7 text-xl ">
             Where you can connect with book lovers all around the world. Whether you are looking to swap, borrow, or purchase books, our platform provides a community-driven space to explore and share your literary passions. ith Book Exchange, finding your next great read and meeting fellow bibliophiles has never been easier
            </p>
          </div>
          <div className="md:w-1/2 md:h-full md:ml-20">
            <img src={Pic} alt="Welcome Illustration" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};



export default WelcomePage;