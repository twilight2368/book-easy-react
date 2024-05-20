import React from "react";
import { Carousel } from "@material-tailwind/react";
import BookDisplay from "../books/BookDisplay";
import BookDisplaySmall from "../books/BookDisplaySmall";
export default function BookListHorizontal(props) {
  const books = props.books;
  const groups = [];
  let i = 0, j = 5;
  while (i < books.length) {
    groups.push(books.slice(i,j));
    i += 5; j += 5;
  }
  console.log(groups);

  return (
    <div>
      <Carousel className="rounded-xl w-full h-96 gap-10 pt-10 pb-12 pr-5 pl-5 ">
      {
        groups.map(g => (
          <div className=" flex flex-row gap-14 h-full">
            { g.map(b => <BookDisplaySmall book={b} />) }
        </div>
        ))
      }
      </Carousel>
    </div>
  );
}
