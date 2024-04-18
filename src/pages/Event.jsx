import React from "react";
import Post from "../components/posts/Post";
import EventCalendar from "../components/calendar/EventCalendar";

export default function Event() {
  return (
    <div>
      <div className=" w-full h-full grid grid-cols-9 ">
        <div className=" col-span-5 flex flex-col items-center gap-10">
          <div className=" w-2/3">
            <Post />
          </div>
          <div className=" w-2/3">
            <Post />
          </div>
        </div>
        <div className=" col-span-4 flex flex-col items-center ">
          <EventCalendar />
        </div>
      </div>
    </div>
  );
}
