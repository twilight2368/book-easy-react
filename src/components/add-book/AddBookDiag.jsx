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
import { XMarkIcon } from "@heroicons/react/24/outline";
export function AddBookDiag() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [publishYear, setPublishYear] = useState(0);
  const [language, setLanguage] = useState('');
  const [weight, setWeight] = useState('');
  const [size, setSize] = useState('');
  const [pages, setPages] = useState(0);
  const [layout, setLayout] = useState('');
  const [description, setDescription] = useState('');

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
          <div className=" flex flex-row items-center pb-3">
            <div className=" w-11/12">
              <Typography variant="h4" color="blue-gray" className="ml-5">
                Add book to your list
              </Typography>
            </div>
            <div>
              <button onClick={handleOpen} className=" flex justify-center items-center">
                <XMarkIcon className="h-8 w-8 p-1 rounded-full text-gray-500 duration-300 hover:text-red-800 hover:bg-red-200 active:scale-75" />
              </button>
            </div>
          </div>
          <CardBody className="flex flex-col gap-4 max-h-[500px] mb-4 overflow-y-auto scroll-smooth">
            <Typography className="-mb-2" variant="h6">
              Title
            </Typography>
            <Input label="Name" size="lg" required value={title} onChange={e => setTitle(e.target.value)}/>
            <Typography className="-mb-2" variant="h6">
              Author
            </Typography>
            <Input label="Author" size="lg" required value={author} onChange={e => setAuthor(e.target.value)}/>
            <Typography className="-mb-2" variant="h6">
              Publisher
            </Typography>
            <Input label="Publisher" size="lg" value={publisher} onChange={e => setPublisher(e.target.value)}/>
            <Typography className="-mb-2" variant="h6">
              Publish Year
            </Typography>
            <Input label="Publish Year" size="lg" value={publishYear} onChange={e => setPublishYear(e.target.value)}/>
            <Typography className="-mb-2" variant="h6">
              Language
            </Typography>
            <Input label="Language" size="lg" value={language} onChange={e => setLanguage(e.target.value)}/>
            <Typography className="-mb-2" variant="h6">
              Weight
            </Typography>
            <Input label=" Weight" size="lg" value={weight} onChange={e => setWeight(e.target.value)}/>
            <Typography className="-mb-2" variant="h6">
              Size
            </Typography>
            <Input label="Size" size="lg" value={size} onChange={e => setSize(e.target.value)}/>
            <Typography className="-mb-2" variant="h6">
              Pages
            </Typography>
            <Input label="Pages" size="lg" value={pages} onChange={e => setPages(e.target.value)}/>
            <Typography className="-mb-2" variant="h6">
              Layout
            </Typography>
            <Input label="Layout" size="lg" value={layout} onChange={e => setLayout(e.target.value)}/>
            <Typography className="-mb-2" variant="h6">
              Description
            </Typography>
            <Textarea label="Description" value={description} onChange={e => setDescription(e.target.value)}/>
            <Typography className="-mb-2" variant="h6">
              Cover image
            </Typography>
            <Input
              label="Image"
              size="lg"
              type="file"
              accept="image/png, image/jpeg"
              className=" flex justify-center items-center"
            />
            <Button variant="gradient" color="blue" onClick={handleOpen} className=" mt-3">
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
