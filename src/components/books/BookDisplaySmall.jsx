import React from "react";
import BookCover from "./book-cover.jpg";
import "./bookdisplay.css";
import { IconButton } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/outline";

export default function BookDisplaySmall() {
  return (
    <div className=" relative w-11/12 h-full duration-300 hover:scale-105 book-display overflow-hidden rounded-md">
      <img src={BookCover} alt="" className=" object-fill h-full w-full" />
      <div className=" absolute top-2 right-2 star-icon-display">
        <IconButton className="bg-black/75">
          <StarIcon className="h-5 w-5 fill-white star-icon" />
        </IconButton>
      </div>
    </div>
  );
}
