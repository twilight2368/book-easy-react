import React from "react";
import BookDisplay from "../components/books/BookDisplay";
import WrapBar from "../components/WrapBar";

export default function InterestBooks() {
  return (
    <WrapBar>
      <div>
        <div className=" pt-5 w-full text-center mb-12">
          <h2 className=" text-2xl font-bold ">My interest</h2>
        </div>
        <div className=" grid grid-cols-5 gap-x-6 gap-y-8 justify-evenly items-center px-10">
          <BookDisplay />
          <BookDisplay />
          <BookDisplay />
          <BookDisplay />
          <BookDisplay />
          <BookDisplay />
          <BookDisplay />
          <BookDisplay />
          <BookDisplay />
          <BookDisplay />
        </div>
      </div>
    </WrapBar>
  );
}
