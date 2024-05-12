import React from "react";
import Post from "../components/posts/Post";
import EventCalendar from "../components/calendar/EventCalendar";
import { AddEventDiag } from "../components/add-event/AddEventDiag";
import { Avatar, Button, Card } from "@material-tailwind/react";
import EventList from "../components/event-list/EventList";
import { AddPostDiag } from "../components/add-post/AddPostDiag";
import EventDetailsCover from "../components/event-details/EventDetailsCover";

export default function EventDetails() {
  const [filter, setFilter] = React.useState(1);

  return (
    <div>
      <div className=" w-full h-full grid grid-cols-9">
        <EventDetailsCover />
        <div className=" col-span-6 flex flex-col items-center gap-4">
          <Card className="w-2/3 min-w-96 flex flex-row items-center gap-2 py-3 px-5">
            <div className=" flex items-center justify-center">
              <Avatar
                className=" h-10 w-10"
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
              />
            </div>
            <div className=" w-full">
              <AddPostDiag />
            </div>
          </Card>
          <div className=" w-2/3">
            <Post />
          </div>
          <div className=" w-2/3">
            <Post />
          </div>
        </div>
        <div className=" col-span-3 w-full flex flex-col items center">
          <div className=" relative col-span-3 flex flex-col items-center pr-16 ">
            <EventCalendar />
          </div>
          <div className=" relative w-full flex flex-col items-center mt-4 pr-16">
            <div className=" min-w-[396px] flex">
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
          </div>
          <div className=" relative w-full flex flex-col items-center mt-2 pr-16">
            <EventList />
          </div>
        </div>
      </div>
    </div>
  );
}
