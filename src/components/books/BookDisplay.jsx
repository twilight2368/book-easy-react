import React from "react";
import BookCover from "./book-cover.jpg";
import "./bookdisplay.css";
import { IconButton } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/outline";

export default function BookDisplay() {
  return (
    <div className=" relative w-11/12 h-full duration-300 hover:scale-105 book-display overflow-hidden rounded-md">
      <img src={BookCover} alt="" className=" object-fill h-full w-full" />
      <div className=" absolute bottom-0 bg-black/75 w-full text-white text-center whitespace-nowrap text-nowrap book-name-display">
        <div className=" font-black text-lg nunito-font mt-1">Dune</div>
        <div className=" nunito-font mb-0">Frank Herbert</div>
      </div>
      <div className=" absolute top-2 right-2 star-icon-display">
        <IconButton className="bg-black/75">
          <StarIcon className="h-5 w-5 fill-white star-icon" />
        </IconButton>
      </div>
    </div>
  );
}
