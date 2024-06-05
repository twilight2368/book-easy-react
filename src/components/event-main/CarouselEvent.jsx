import { Button } from '@material-tailwind/react';
import React from 'react'
import { Link } from 'react-router-dom';

const CarouselEvent = (props) => {
  const { event } = props;
  return (
    <div className=" relative h-full w-full">
      <div className=" relative h-full w-full">
        <img
          src={event.imagePath}
          alt="image 1"
          className="h-full w-full object-cover"
        />
      </div>
      <div className=" absolute bottom-10 w-3/4 ml-36 p-3 bg-black/50 flex flex-row rounded-lg">
        <div className=" w-5/6 text-white ">
          <div>
            <h2 className=" text-3xl mb-1">{event.name}</h2>
          </div>
          <div className=" text-xs text-white/80">
            <span>from {event.startTime?.substring(0, 10)} </span> <span>to {event.endTime?.substring(0, 10)}</span>
          </div>
        </div>
        <div className=" w-1/6 flex flex-col justify-center items-center">
          <Button className=" bg-white text-black duration-150 hover:scale-90 ">
            Interested
          </Button>
          <div>
            <Link to={`/events/${event.id}`}>
              <span className=" text-white text-xs underline duration-150 hover:text-blue-300">
                Details
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselEvent