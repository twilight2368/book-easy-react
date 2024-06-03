import { useEffect, useState } from 'react'
import EventListEvent from './EventListEvent'
import EventCalendar from '../calendar/EventCalendar';
import { Button, Card } from "@material-tailwind/react";
import { useCookies } from 'react-cookie';
import environment from '../../environment';

const EventList = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  const today = new Date();
  const [activeDate, setActiveDate] = useState(today);
  const [filter, setFilter] = useState(1);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let url;
    if (filter == 1) {
      url = `${environment.apiUrl}/events/latest`
    }
    else if (filter == 2) {
      url = `${environment.apiUrl}/events/filter-event-that-user-concern?id=${cookies['user'].id}`
    }
    else {
      url = `${environment.apiUrl}/events/find-by-owner?id=${cookies['user'].id}`
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

  useEffect(() => {
    const fetchEvent = async () => {
      const date = activeDate.toLocaleDateString("en-CA", {year:"numeric", month: "2-digit", day:"2-digit"});
      try {
        const response = await fetch(`${environment.apiUrl}/events/event-by-date?from=${date}&to=${date}`);
        const data = await response.json();
        console.log(data);
        setEvents(data.content);
      }
      catch(err) {
        console.log(err);
      }
    }

    fetchEvent();
  }, [activeDate]);
  

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
        <EventCalendar activeDate={activeDate} setActiveDate={setActiveDate} />
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