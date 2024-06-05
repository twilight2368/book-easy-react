import React, { useEffect, useState } from "react";
import { Button, Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import environment from "../../environment";
import CarouselEvent from "./CarouselEvent";

export default function EventMain() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`${environment.apiUrl}/events/latest`);
        const data = await response.json();
        console.log(data);
        setEvents(data.content.slice(0, 5));
      }
      catch(err) {
        console.log(err);
      }
    }

    fetchEvent();
  }, []);

  const eventList = events.map((event) => 
    <CarouselEvent
      key={event.id}
      event={event}
    />
  )

  return (
    <div>
      <div className="h-80">
        <Carousel className="rounded-xl">
          {eventList}
        </Carousel>
      </div>
    </div>
  );
}
