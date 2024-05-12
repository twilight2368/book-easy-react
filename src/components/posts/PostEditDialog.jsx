import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button, Card, CardBody, Dialog, Input, Textarea, Typography } from '@material-tailwind/react'
import React from 'react'

const PostEditDialog = (props) => {
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
          <Typography className="-mb-2" variant="h6">
            Title
          </Typography>
          <Input label="Title" size="lg" required />
          <Typography className="-mb-2" variant="h6">
            Content
          </Typography>
          <Textarea label="Content "/>
          <Button variant="gradient" color="blue" onClick={handleOpen}>
            Finish
          </Button>
        </CardBody>
      </Card>
    </Dialog>
  )
}

export default PostEditDialog