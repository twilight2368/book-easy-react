import { StarIcon } from '@heroicons/react/24/outline'
import { Button, Card } from '@material-tailwind/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatDateEvent } from '../../utils/getDateShit'
import environment from '../../environment'

const EventListEvent = (props) => {
  const { event } = props;

  return (
    <Link to={`/events/${event.id}`}>
      <Card className=" w-full min-h-36 flex flex-row items-center gap-2 p-4 mb-2 duration-150 hover:bg-black/5">
        <div className=" w-36 h-24">
          <div className=" w-full h-full rounded-md overflow-hidden">
            <img
              src={event.imagePath}
              alt="image 1"
              className="h-full w-full object-cover"
            />
          </div> 
        </div>
        <div className=" w-full h-full flex flex-col justify-between gap-2">
          <div>
            <div className="text-md">
              {formatDateEvent(event.startTime)}
            </div>
            <div className="text-lg font-bold text-black">{event.name}</div>
          </div>
          <Button className=" w-full h-10 flex justify-center items-center" color="blue">
            <StarIcon className=" h-5 pr-2"/>
            Interested
          </Button>
        </div>
      </Card>
    </Link>
  )
}

export default EventListEvent