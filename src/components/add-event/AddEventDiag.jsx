import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { XMarkIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

export function AddEventDiag() {
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const start = `${startDate}T${startTime}:00.000Z`;
    const end = `${endDate}T${endTime}:00.000Z`;

    await fetch('http://localhost:8080/api/v1/events', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ownerId: cookies['user'].id,
        name: name,
        description: description,
        startTime: start,
        endTime: end,
        concernedUserIds: []
      }),
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
    .then(data => {
      navigate(`/events/${data.id}`);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      <Button onClick={handleOpen} className="w-full h-12 bg-blue-500 montserrat-font">
        <div className="flex justify-center items-center">
          <PlusIcon className="h-5 w-5 mr-2"/>
          <div className="font-black">
            Create new event
          </div>
        </div>
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
            <form onSubmit={handleSubmit}>
              <Typography className="mb-2" variant="h6">
                Name
              </Typography>
              <Input label="Name" size="lg" required value={name} onChange={(event) => setName(event.target.value)}/>
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
                    value={startDate} 
                    onChange={(event) => setStartDate(event.target.value)}
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
                    value={startTime} 
                    onChange={(event) => setStartTime(event.target.value)}
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
                    value={endDate} 
                    onChange={(event) => setEndDate(event.target.value)}
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
                    value={endTime} 
                    onChange={(event) => setEndTime(event.target.value)}
                  />
                </div>
              </div>
              <Typography className="mb-2" variant="h6" value={description} onChange={(event) => setDescription(event.target.value)}>
                Description
              </Typography>
              <Textarea label="Description" />
              {/* <Typography className="-mb-2" variant="h6">
                Cover image
              </Typography>
              <Input
                label="Image"
                size="lg"
                type="file"
                accept="image/png, image/jpeg"
                className=" flex justify-center items-center"
                required
              /> */}
              <Button variant="gradient" color="blue" type="submit">
                Create event
              </Button>
            </form>
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
