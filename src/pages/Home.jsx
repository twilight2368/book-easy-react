import React from "react";
import BookListHorizontal from "../components/book-list/book-list-horizontal";
import EventMain from "../components/event-main/event-main";
import WrapBar from "../components/WrapBar";

export default function Home() {
  return (
    <>
      <WrapBar>
        <div className="  pl-10 pr-10 pt-5">
          <div className="w-full pl-10 mb-5 min-h-full">
            <EventMain />
          </div>
          <div className="w-full pl-5 mb-5 min-h-full">
            <h2 className="pl-5 font-black text-2xl">Books</h2>
            <BookListHorizontal />
          </div>
          <div className="w-full pl-5 mb-5 min-h-full">
            <h2 className="pl-5 font-black text-2xl">Books</h2>
            <BookListHorizontal />
          </div>
          <div className="w-full pl-5 mb-5 min-h-full">
            <h2 className="pl-5 font-black text-2xl">Books</h2>
            <BookListHorizontal />
          </div>
          <div className="w-full pl-5 mb-5 min-h-full">
            <h2 className="pl-5 font-black text-2xl">Books</h2>
            <BookListHorizontal />
          </div>
          <div className="w-full pl-5 mb-5 min-h-full">
            <h2 className="pl-5 font-black text-2xl">Books</h2>
            <BookListHorizontal />
          </div>
          <div className="w-full pl-5 mb-5 min-h-full">
            <h2 className="pl-5 font-black text-2xl">Books</h2>
            <BookListHorizontal />
          </div>
          <div className="w-full pl-5 mb-5 min-h-full">
            <h2 className="pl-5 font-black text-2xl">Books</h2>
            <BookListHorizontal />
          </div>
        </div>
      </WrapBar>
    </>
  );
}
