import React from "react";
import { Carousel } from "@material-tailwind/react";
import BookDisplay from "../books/BookDisplay";
import BookDisplaySmall from "../books/BookDisplaySmall";
export default function BookListHorizontal() {
  return (
    <div>
      <Carousel className="rounded-xl w-full h-96 gap-10 pt-10 pb-12 pr-5 pl-5 ">
        <div className=" flex flex-row gap-14 h-full">
          <BookDisplaySmall />
          <BookDisplaySmall />
          <BookDisplaySmall />
          <BookDisplaySmall />
          <BookDisplaySmall />
        </div>
        <div className=" flex flex-row gap-14 h-full">
          <BookDisplaySmall />
          <BookDisplaySmall />
          <BookDisplaySmall />
          <BookDisplaySmall />
          <BookDisplaySmall />
        </div>
        <div className=" flex flex-row gap-14 h-full">
          <BookDisplaySmall />
          <BookDisplaySmall />
          <BookDisplaySmall />
          <BookDisplaySmall />
          <BookDisplaySmall />
        </div>
      </Carousel>
    </div>
  );
}
