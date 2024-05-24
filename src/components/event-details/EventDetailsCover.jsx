import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { Button, Card, IconButton, Typography } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import EventMenu from './EventMenu'

const EventDetailsCover = () => {
  return (
    <div className=" relative -top-5 max-h-72 w-full col-span-8 col-start-2 pr-4 overflow-hidden">
      <Card className=" w-full h-full flex flex-col rounded-md">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover rounded-md"
        />
        <div className=" absolute bottom-10 w-3/4 ml-36 p-3 bg-black/50 flex flex-row rounded-lg">
          <div className=" w-5/6 text-white ">
            <div>
              <h2 className=" text-3xl mb-1">National Day of Resentment</h2>
            </div>
            <div className=" text-xs text-white/80">
              <span>from 30/04/1975 </span> <span>to 30/04/2025</span>
            </div>
          </div>
          <div className=" w-1/4 flex flex-row justify-center items-center gap-2">
            <Button className=" bg-white text-black duration-150 hover:scale-90 ">
              Interested
            </Button>
            <EventMenu />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default EventDetailsCover