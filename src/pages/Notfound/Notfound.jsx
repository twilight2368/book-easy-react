import React from "react";
import Logo from "../../assets/images/books.png";
import NotFoundPic from "../../assets/images/3793096.jpg";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router";
export default function Notfound() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen">
      <div className="pt-5 h-24 w-full bg-white flex justify-center items-center gap-2">
        <div>
          <img src={Logo} alt="" className=" block h-20 w-auto select-none" />
        </div>
        <div>
          <h1 className="madimi-one-regular text-3xl text-blue-300">
            Book Exchange
          </h1>
        </div>
      </div>
      <div className=" grid grid-cols-2 grid-rows-2 p-32 pr-96">
        <div className=" row-span-2 flex items-center justify-end">
          <img src={NotFoundPic} alt="" className=" h-96 w-auto" />
        </div>
        <div className=" flex justify-center  items-end pb-5">
          <span className=" text-5xl text-blue-300 font-black">
            Sorry, the page not found
          </span>
        </div>
        <div>
          <div className=" text-center text-lg text-black font-bold">
            The link you followed probably broken or the page has been removed
          </div>
          <div className=" mt-5 flex justify-center">
            <Button className="" variant="outlined" color="blue" onClick={(e)=>{
                e.preventDefault()
                navigate("/")
            }}>
              Back to home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
