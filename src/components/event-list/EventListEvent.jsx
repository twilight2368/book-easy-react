import { StarIcon } from '@heroicons/react/24/outline'
import { Button, Card } from '@material-tailwind/react'
import React from 'react'

const EventListEvent = () => {
  return (
    <div>
      <Card className=" w-full h-36 flex flex-row items-center gap-2 p-4 my-2">
        <div className=" w-36 h-full">
          <div className=" w-full h-full rounded-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
          </div> 
        </div>
        <div className=" w-full h-full flex flex-col justify-between gap-2">
          <div>
            <div className="text-md">Sun, May 29 at 10 AM</div>
            <div className="text-lg font-bold text-black">Light Novel Sharing Day</div>
          </div>
          <Button className=" w-full h-10 flex justify-center items-center" color="blue">
            <StarIcon className=" h-5 pr-2"/>
            Interested
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default EventListEvent