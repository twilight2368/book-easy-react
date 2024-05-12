import React from 'react'
import EventListEvent from './EventListEvent'

const EventList = () => {
  return (
    <div className="  min-w-[396px] flex flex-col">
      <EventListEvent />
      <EventListEvent />
      <EventListEvent />
      <EventListEvent />
      <EventListEvent />
    </div>
  )
}

export default EventList