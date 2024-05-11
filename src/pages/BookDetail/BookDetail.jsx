import React from "react";
import Pic from "./2767052.jpg";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

const BookDetail = () => {
  return (
    <div>
      <Helmet>
        <title>Details</title>
      </Helmet>
      <div className="w-full mx-auto mb-32 mt-16 flex flex-col items-left bg-white rounded-lg border shadow-md md:flex-row md:max-w-5xl hover:bg-gray-100 dark:border-white-700 dark:bg-white-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full h-full rounded-t-lg md:h-full md:w-full md:rounded-none md:rounded-l-lg"
          src={Pic}
          alt=""
        />

        <div className="px-10 pb-10">
          <Link to="#">
            <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              The Hunger Game
            </h5>
            <p className="text-lg font-semibold my-2">Author: J.K.Rowling</p>
            <p className="text-lg font-semibold my-2">Nhà xuất bản: Nhã Nam</p>
            <p>
              Winning will make you famous. Losing means certain death.The
              nation of Panem, formed from a post-apocalyptic North America, is
              a country that consists of a wealthy Capitol region surrounded by
              12 poorer districts. Early in its history, a rebellion led by a
              13th district against the Capitol resulted in its destruction and
              the creation of an annual televised event known as the Hunger
              Games. In punishment, and as a reminder of the power and grace of
              the Capitol, each district must yield one boy and one girl between
              the ages of 12 and 18 through a lottery system to participate in
              the games. .
            </p>
            <button
              type="button"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Offer this book
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BookDetail;
