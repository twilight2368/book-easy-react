import React from "react";
import Post from "../components/posts/Post";
import EventCalendar from "../components/calendar/EventCalendar";
import { AddEventDiag } from "../components/add-event/AddEventDiag";
import { Button } from "@material-tailwind/react";

export default function Event() {
  const [filter, setFilter] = React.useState(1);

  return (
    <div>
      <div className=" w-full h-full grid grid-cols-9 ">
        <div className=" col-span-6 flex flex-col items-center gap-10">
          <div className=" w-2/3">
            <Post />
          </div>
          <div className=" w-2/3">
            <Post />
          </div>
        </div>
        <div className=" sticky col-span-3 w-full flex flex-col items center">
          <div className=" relative -left-12 w-full flex items-center mb-4">
            <Button
              className={filter === 1 ? "mr-2 bg-white text-blue-500 shadow-none" : " mr-2 bg-blue-500"}
              onClick={() => setFilter(1)}
            >
              All
            </Button>
            <Button 
              className={filter === 2 ? "mr-2 bg-white text-blue-500 shadow-none" : " mr-2 bg-blue-500"}
              onClick={() => setFilter(2)}
            >
              Interested
            </Button>
            <Button
              className={filter === 3 ? "mr-2 bg-white text-blue-500 shadow-none" : " mr-2 bg-blue-500"}
              onClick={() => setFilter(3)}
            >
              My events
            </Button>
          </div>
          <div className=" relative col-span-3 flex flex-col items-center pr-16 ">
            <EventCalendar />
          </div>
          <div className=" relative -left-12 w-[396px] mt-4">
            <AddEventDiag />
          </div>
        </div>
      </div>
    </div>
  );
}
