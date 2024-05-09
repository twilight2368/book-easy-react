import React from "react";
import BookCover from "./book-cover.jpg";
import "./bookdisplay.css";
import { IconButton } from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function MyBookDisplay(props) {
  return (
    <div className=" relative w-11/12 h-full duration-300 hover:scale-105 book-display overflow-hidden rounded-md">
      <img src={BookCover} alt="" className=" object-fill h-full w-full" />
      <div className=" absolute bottom-0 bg-black/75 w-full text-white text-center whitespace-nowrap text-nowrap book-name-display">
        <div className=" font-black text-sm nunito-font mt-0.5 mb-0.5">
          Dune
        </div>
        <div className=" nunito-font text-xs mb-0.5">Frank Herbert</div>
      </div>
      <div className=" absolute top-2 right-2 trash-icon-display">
        <IconButton className="bg-black/75">
          <TrashIcon className="h-5 w-5 text-gray-500 trash-icon" />
        </IconButton>
      </div>
      {props.borrowed ? (
        <>
          <div className=" absolute top-0 w-full h-full bg-black/60 flex flex-col justify-center items-center">
            <div className=" text-center">
              <span className=" text-white">The book</span>
              <br />
              <span className=" text-white">has been borrowed</span>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
