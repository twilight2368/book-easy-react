import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Textarea,
  Popover,
  PopoverHandler,
  PopoverContent
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
export function AddEventDiag() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState()
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button onClick={handleOpen} className="h-12 bg-blue-500 montserrat-font my-1">
        Add event
      </Button>
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
                Add a new event
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
                  Date
                </Typography>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className=" h-full w-full p-2.5 border border-[#b0bec5] rounded-md font-roboto text-sm"
                />
              </div>
              <div className=" h-full w-full">
                <Typography className="mb-2" variant="h6">
                  Time
                </Typography>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className=" h-full w-full p-2.5 border border-[#b0bec5] rounded-md font-roboto text-sm"
                />
              </div>
            </div>
            <Typography className="-mb-2" variant="h6">
              Location
            </Typography>
            <Input label="Location" size="lg" required />
            <Typography className="-mb-2" variant="h6">
              Details
            </Typography>
            <Textarea label="Details" />
            <Typography className="-mb-2" variant="h6">
              Cover image
            </Typography>
            <Input
              label="Image"
              size="lg"
              type="file"
              accept="image/png, image/jpeg"
              className=" flex justify-center items-center"
              required
            />
            <Button variant="gradient" color="blue" onClick={handleOpen}>
              Create event
            </Button>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}

//todo : require attribute
/*
 {
  "id": 0,
  "ownerId": 0,
  "name": "string",
  "author": "string",
  "publisher": "string",
  "publishYear": 0,
  "language": "string",
  "weight": "string",
  "size": "string",
  "pages": 0,
  "layout": "string",
  "description": "string",
  "imagePath": "string",
  "status": "string",
  "created": "2024-05-07T08:39:48.062Z"
}
 */
