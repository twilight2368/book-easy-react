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
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
export function AddBookDiag() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button onClick={handleOpen} color="blue" variant="outlined">
        Add book
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
                Add book to your list
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
            <Typography className="-mb-2" variant="h6">
              Author
            </Typography>
            <Input label="Author" size="lg" required />
            <Typography className="-mb-2" variant="h6">
              Publisher
            </Typography>
            <Input label="Publisher" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Publish Year
            </Typography>
            <Input label="Publish  Year" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Language
            </Typography>
            <Input label="Language" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Weight
            </Typography>
            <Input label=" Weight" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Size
            </Typography>
            <Input label="Size" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Pages
            </Typography>
            <Input label="Pages" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Layout
            </Typography>
            <Input label="Layout" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Description
            </Typography>
            <Textarea label="Description" />
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
              Confirm
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