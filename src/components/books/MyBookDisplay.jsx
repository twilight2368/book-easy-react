import React from "react";
import BookCover from "./book-cover-default.png";
import "./bookdisplay.css";
import { IconButton } from "@material-tailwind/react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { ChangeBookInfoDiag } from "../add-book/ChangeInfoBookDiag";
import { DelBookDiag } from "../add-book/DelBookDiag";
import { Link, useNavigate } from "react-router-dom";

export default function MyBookDisplay(props) {
  const { book } = props;

  return (
    <div className=" relative w-11/12 h-72 duration-300 hover:scale-105 book-display overflow-hidden rounded-md">
      <div className=" absolute top-2 right-2 bg-black/75 trash-icon-display rounded-md">
        <DelBookDiag bookId={book.id}>
          <TrashIcon className="h-5 w-5 text-gray-500 trash-icon" />
        </DelBookDiag>
      </div>
      <div className=" absolute top-2 left-2 bg-black/75 pen-icon-display rounded-md">
        <ChangeBookInfoDiag book={book}>
          <PencilSquareIcon className="h-5 w-5 text-gray-500 pen-icon" />
        </ChangeBookInfoDiag>
      </div>
      <Link key={book.id} to={`/book/${book.id}`}>
        <img src={book.imagePath || BookCover} alt="" className=" object-fill h-full w-full" />
        <div className=" absolute bottom-0 bg-black/75 w-full text-white text-center whitespace-nowrap text-nowrap book-name-display">
          <div className=" font-black text-sm nunito-font mt-2 mb-0.5">
            {book.title}
          </div>
          <div className=" nunito-font text-xs mb-0.5">{book.author}</div>
        </div>
        {book.status === 'EXCHANGED' && (
          <>
            <div className=" absolute top-0 w-full h-full bg-black/60 flex flex-col justify-center items-center">
              <div className=" text-center">
                <span className=" text-white">The book</span>
                <br />
                <span className=" text-white">has been exchanged</span>
              </div>
            </div>
          </>
        )}
      </Link>
    </div>
  );
}
