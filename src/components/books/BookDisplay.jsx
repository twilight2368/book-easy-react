import React from "react";
import BookCover from "./book-cover-default.png";
import "./bookdisplay.css";
import { IconButton } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import environment from "../../environment";
import { useCookies } from "react-cookie";
export default function BookDisplay(props) {
  const book = props.book;
  const [cookies, setCookie, removeCookie] = useCookies(['user', 'token']);
  const thisUser = cookies['user'];

  const [interested, setInterested] = React.useState(book.concernedUserIds.includes(thisUser.id));

  const addBookToInterest = async () => {
    const response = await fetch(`${environment.apiUrl}/books/${book.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          ...book,
          concernedUserIds: [...book.concernedUserIds, thisUser.id]
        }
      ),
    })
    if (response.ok) {
      setInterested(true);
    }
  }

  const removeBookFromInterest = async () => {
    const response = await fetch(`${environment.apiUrl}/books/${book.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          ...book,
          concernedUserIds: book.concernedUserIds.filter(userId => userId != thisUser.id)
        }
      ),
    })
    if (response.ok) {
      setInterested(false);
    }
  }

  return (
    <div className=" relative w-11/12 h-full duration-300 hover:scale-105 book-display overflow-hidden rounded-md">
      <Link to={`/book/${book.id}`}>
        <img src={book.imagePath || BookCover} alt="" className=" object-fill h-full w-full" />
        <div className=" absolute bottom-0 bg-black/75 w-full text-white text-center whitespace-nowrap text-nowrap book-name-display">
          <div className=" font-black text-base nunito-font mt-1">{book.title}</div>
          <div className=" nunito-font mb-0 text-sm">{book.author}</div>
        </div>
      </Link>
      <div className=" absolute top-2 right-2 star-icon-display">
        {!interested ? 
          <IconButton className="bg-black/75" onClick={addBookToInterest}>
            <StarIcon className="h-5 w-5 fill-white star-icon" />
          </IconButton> :
          <IconButton className="bg-black/75" onClick={removeBookFromInterest}>
            <StarIcon className="h-5 w-5 fill-blue-300 star-icon" />
          </IconButton>
        }
        
      </div>
    </div>
  );
}
