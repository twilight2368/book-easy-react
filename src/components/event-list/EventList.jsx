import React from 'react'
import EventListEvent from './EventListEvent'

const EventList = () => {
  return (
    <div className=" w-full flex flex-col">
      <EventListEvent />
      <EventListEvent />
      <EventListEvent />
      <EventListEvent />
      <EventListEvent />
    </div>
  )
}

export default EventList