import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button, Card, CardBody, Dialog, Input, Textarea, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';

const PostEditDialog = (props) => {
  const { open, handleOpen, post } = props;
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/v1/posts/${post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: cookies['user'].id,
          title: title,
          content: content,
          imagePath: post.imagePath,
          likedUserIds: post.likedUserIds,
          eventId: post.eventId,
        }),
      })
      if (response.ok) {
        const data = await response.json();
        setBooks(data.content);
        navigate(`/events/${data.id}`);
      }
    }
    catch(err) {
      console.log(err);
    }
  }

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
              Edit post
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
            <Typography className="-mb-2" variant="h6">
              Title
            </Typography>
            <Input label="Title" size="lg" required value={title} onChange={e => setTitle(e.target.value)} />
            <Typography className="-mb-2" variant="h6">
              Content
            </Typography>
            <Textarea label="Content" value={content} onChange={e => setContent(e.target.value)} />
            <Button variant="gradient" color="blue" type="submit">
              Finish
            </Button>
          </form>
        </CardBody>
      </Card>
    </Dialog>
  )
}

export default PostEditDialog