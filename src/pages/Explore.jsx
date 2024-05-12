import React from "react";
import BookDisplay from "../components/books/BookDisplay";
import FilterBookExplore from "../components/FilterBookExplore";

export default function Explore() {
  return (
    <div className=" w-full">
      <div className=" mt-4 w-full pl-10">
        <h1 className=" font-black text-lg ">All books ({1000})</h1>
      </div>
      <div className=" w-full grid grid-cols-10 mt-4">
        <div className=" col-span-8 px-10 mt-4">
          <div className=" w-full h-full grid grid-cols-3 gap-10">
            <div>
              <BookDisplay />
            </div>
            <div>
              <BookDisplay />
            </div>
            <div>
              <BookDisplay />
            </div>

            <div>
              <BookDisplay />
            </div>
            <div>
              <BookDisplay />
            </div>
            <div>
              <BookDisplay />
            </div>
          </div>
        </div>
        <div className=" col-span-2 pt-4 pr-4">
          <FilterBookExplore />
        </div>
      </div>
    </div>
  );
}
