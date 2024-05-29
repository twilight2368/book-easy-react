import React, { useEffect, useState } from "react";
import BookDisplay from "../components/books/BookDisplay";
import WrapBar from "../components/WrapBar";
import { useCookies } from "react-cookie";
import environment from "../environment";

export default function InterestBooks() {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${environment.apiUrl}/books/filter-books-that-user-concerned?id=${cookies['user'].id}`);
        const data = await response.json();
        setBooks(data.content);
        console.log(data.content);
      }
      catch(err) {
        console.log(err);
      }
    }

    fetchBooks();
  }, []);

  const bookList = books.map(book => 
    <BookDisplay
      book={book}
    />  
  )

  return (
    <WrapBar>
      <div>
        <div className=" pt-5 w-full text-center mb-12">
          <h2 className=" text-2xl font-bold ">My interest</h2>
        </div>
        <div className=" grid grid-cols-5 gap-x-6 gap-y-8 justify-evenly items-center px-10">
          {bookList}
        </div>
      </div>
    </WrapBar>
  );
}
