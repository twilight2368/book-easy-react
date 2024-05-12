import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button, Card, CardBody, Dialog, Input, Textarea, Typography } from '@material-tailwind/react'
import React from 'react'

const EventEditDialog = (props) => {
  const { open, handleOpen } = props;
  return (
    <Dialog
      size="xl"
      open={open}
      handler={handleOpen}
      className="bg-transparent shadow-none nunito-font"
    >
      <Card className="mx-auto w-full max-w-[600px] pt-5">
        <div className=" flex flex-row items-center">
          <div className=" w-11/12">
            <Typography variant="h4" color="blue-gray" className="ml-5">
              Edit event
            </Typography>
          </div>
          <div>
            <button onClick={handleOpen} className=" flex justify-center items-center">
              <XMarkIcon className="h-6 w-6 text-gray-500 duration-300 hover:text-red-300" />
            </button>
          </div>
        </div>
        <CardBody className="flex flex-col gap-4 max-h-[500px] mb-4 overflow-y-auto scroll-smooth">
          <Typography className="-mb-2" variant="h6">
            Name
          </Typography>
          <Input label="Name" size="lg" required />
          <div className=" flex gap-2 w-full">
            <div className=" h-full w-full">
              <Typography className="mb-2" variant="h6">
                Start date
              </Typography>
              <input
                type="date"
                name="startDate"
                id="startDate"
                className=" h-full w-full p-2.5 border border-[#b0bec5] rounded-md font-roboto text-sm"
              />
            </div>
            <div className=" h-full w-full">
              <Typography className="mb-2" variant="h6">
                Start time
              </Typography>
              <input
                type="time"
                name="startTime"
                id="startTime"
                className=" h-full w-full p-2.5 border border-[#b0bec5] rounded-md font-roboto text-sm"
              />
            </div>
          </div>
          <div className=" flex gap-2 w-full">
            <div className=" h-full w-full">
              <Typography className="mb-2" variant="h6">
                End date
              </Typography>
              <input
                type="date"
                name="endDate"
                id="endDate"
                className=" h-full w-full p-2.5 border border-[#b0bec5] rounded-md font-roboto text-sm"
              />
            </div>
            <div className=" h-full w-full">
              <Typography className="mb-2" variant="h6">
                End time
              </Typography>
              <input
                type="time"
                name="endTime"
                id="endTime"
                className=" h-full w-full p-2.5 border border-[#b0bec5] rounded-md font-roboto text-sm"
              />
            </div>
          </div>
          <Typography className="-mb-2" variant="h6">
            Description
          </Typography>
          <Textarea label="Description" />
          <Button variant="gradient" color="blue" onClick={handleOpen}>
            Finish
          </Button>
        </CardBody>
      </Card>
    </Dialog>
  )
}

export default EventEditDialog