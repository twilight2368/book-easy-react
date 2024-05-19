import React, { useEffect } from 'react'
import EventListEvent from './EventListEvent'
import EventCalendar from '../calendar/EventCalendar';
import { Button, Card } from "@material-tailwind/react";

const EventList = () => {
  const [filter, setFilter] = React.useState(1);
  const [events, setEvents] = React.useState([]);

  useEffect(() => {
    const fetchedEvents = [
      {
        id: 1,
        title: "Ngày quốc hận",
        datetime: new Date('April 30, 1975 11:30:00'),
      },
      {
        id: 2,
        title: "Giải phóng miền Nam",
        datetime: new Date('April 30, 1975 11:30:00'),
      }
    ]
    setEvents(fetchedEvents);
  }, []);

  const eventList = events.map((event) => 
    <EventListEvent 
      id={event.id}
      title={event.title}
      datetime={event.datetime}
    />
  )

  return (
    <div className=" col-span-3 w-full flex flex-col gap-4">
      <div className=" relative col-span-3 flex flex-col items-center pr-16 ">
        <EventCalendar />
      </div>
      <div className=" relative -left-12 w-full flex items-center">
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
      <div className=" relative -left-12 w-[396px]">
        <div className="  min-w-[396px] flex flex-col">
          {eventList}
        </div>
      </div>
    </div>
  )
}

export default EventList