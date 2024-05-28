import React, { useEffect, useState } from "react";
import MyBookDisplay from "../components/books/MyBookDisplay";
import { Checkbox } from "@material-tailwind/react";
import { AddBookDiag } from "../components/add-book/AddBookDiag";
import WrapBar from "../components/WrapBar";
import { useCookies } from "react-cookie";
import environment from "../environment";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function MyBooks() {
  const [cookies, setCookie] = useCookies(['user', 'accessToken']);
  const thisUser = cookies['user'];
  const navigate = useNavigate();
  
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    if (!(thisUser?.id)) {
      window.alert("Your session has expired. Please sign in again.");
      navigate('/login');
      return;
    }

    const response = await fetch(`${environment.apiUrl}/books/find-by-user?id=${thisUser.id}`);
    const data = await response.json();
    console.log(data.content);

    setBooks(data.content);
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
      <WrapBar>
        <div className=" pt-3">
          <div className=" w-full text-center">
            <h2 className=" text-2xl font-bold mb-3">My books</h2>
          </div>
          <div className=" w-full h-16 mb-5 flex flex-row ">
            <div className=" flex flex-row items-center w-10/12">
              <Checkbox
                defaultChecked
                color="blue"
                className="h-5 w-5"
                label="Include books borrowed"
              />
            </div>
            <div className=" pl-10 flex justify-center items-center">
              <AddBookDiag />
            </div>
          </div>
          <div className=" w-full grid grid-cols-5 px-3 gap-5 gap-y-8 justify-center items-center">
            { books.map(book => (
              <MyBookDisplay book={book} />
            )) }
          </div>
        </div>
      </WrapBar>
    </>
  );
}
