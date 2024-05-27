import { useEffect, useState } from 'react'
import EventListEvent from './EventListEvent'
import EventCalendar from '../calendar/EventCalendar';
import { Button, Card } from "@material-tailwind/react";
import { useCookies } from 'react-cookie';

const EventList = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  const [filter, setFilter] = useState(1);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let url;
    if (filter == 1) {
      url = 'http://localhost:8080/api/v1/events/latest'
    }
    else if (filter == 2) {
      url = `http://localhost:8080/api/v1/events/filter-event-that-user-concert?id=${cookies['user'].id}`
    }
    else {
      url = `http://localhost:8080/api/v1/events/find-by-owner?id=${cookies['user'].id}`
    }
    const fetchEvent = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setEvents(data.content);
      }
      catch(err) {
        console.log(err);
      }
    }

    fetchEvent();
  }, [filter]);

  const eventList = events.map((event) => 
    <EventListEvent
      key={event.id}
      id={event.id}
      ownerId={event.ownerId}
      name={event.name}
      startTime={event.startTime}
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