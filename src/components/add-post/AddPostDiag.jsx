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
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import environment from "../../environment";
export function AddPostDiag(props) {
  const { eventId } = props;
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [image, setImage] = useState();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const handleChange = (e) => {
    setImagePath(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${environment.apiUrl}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: cookies['user'].id,
          title: title,
          content: content,
          imagePath: imagePath,
          eventId: eventId,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const imageResponse = await fetch(`${environment.apiUrl}/${data.id}/upload-image-post`, {
          method: "POST",
          headers: {
            "Content-Type": "image/png",
          },
          body: image,
        });
        if (imageResponse.ok) {
          const imageData = await response.json();
          console.log(imageData);
          navigate(0);
        }
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Button onClick={handleOpen} className="w-full h-12 bg-blue-500 montserrat-font">
        <div className="flex justify-center items-center">
          <PlusIcon className="h-5 w-5 mr-2"/>
          <div className="font-black">
            Add post
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
                Create a new post
              </Typography>
            </div>
            <div>
              <button onClick={handleOpen} className=" flex justify-center items-center">
                <XMarkIcon className="h-6 w-6 text-gray-500 duration-300 hover:text-red-300" />
              </button>
            </div>
          </div>
          <CardBody className="flex flex-col gap-4 max-h-[500px] overflow-y-auto scroll-smooth">
            <form onSubmit={handleSubmit}>
              <Typography className="mb-2" variant="h6">
                Title
              </Typography>
              <Input label="Title" size="lg" required value={title} onChange={e => setTitle(e.target.value)} />
              <Typography className="mb-2" variant="h6">
                Content
              </Typography>
              <Textarea label="Content" value={content} onChange={e => setContent(e.target.value)} />
              <Typography className="mb-2" variant="h6">
                Image
              </Typography>
              <Input
                label="Image"
                size="lg"
                type="file"
                accept="image/png, image/jpeg"
                className=" flex justify-center items-center"
                onChange={handleChange}
              />
              <img src={imagePath} className="w-full mb-2" />
              <Button variant="gradient" color="blue" type="submit">
                Post
              </Button>
            </form>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}