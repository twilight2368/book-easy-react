import React, { useEffect, useState } from "react";
import BookListHorizontal from "../components/book-list/book-list-horizontal";
import EventMain from "../components/event-main/event-main";
import WrapBar from "../components/WrapBar";
const apiUrl = "http://localhost:8080/api/v1";

export default function Home() {

  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${apiUrl}/books/list-by-categories`);
    const data = await response.json();
    console.log(data);
    setCategories(data);
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <WrapBar>
        <div className="  pl-10 pr-10 pt-5">
          <div className="w-full pl-10 mb-5 min-h-full">
            <EventMain />
          </div>
          {
            categories.map(c => (
            <div key={c.id} className="w-full pl-5 mb-5 min-h-full">
              <h2 className="pl-5 font-black text-2xl">{c.categoryName}</h2>
              <BookListHorizontal books={c.books} />
            </div>))
          }
        </div>
      </WrapBar>
    </>
  );
}
