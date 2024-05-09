import { Button, Card, CardBody, Dialog, Typography } from '@material-tailwind/react'
import React from 'react'

const PostDeleteDialog = (props) => {
  console.log(props);
  const { open, handleOpen } = props;
  return (
    <Dialog
      size="xs"
      open={open}
      handler={handleOpen}
      className="bg-transparent shadow-none nunito-font"
    >
      <Card className="mx-auto w-full max-w-[600px] pt-5">
        <div className=" flex flex-row items-center">
          <div className=" w-11/12">
            <Typography variant="h4" color="blue-gray" className="ml-5">
              Delete event?
            </Typography>
            <Typography variant="p" color="blue-gray" className="ml-5 mt-2">
              This action cannot be undone.
              The event will be removed permanently and will not be visible to other users.
            </Typography>
          </div>
        </div>
        <CardBody className="flex flex-col gap-4 max-h-[500px] overflow-y-auto scroll-smooth">
          <Button variant="gradient" color="red" onClick={handleOpen}>
            Delete
          </Button>
          <Button variant="outlined" color="blue" onClick={handleOpen}>
            Cancel
          </Button>
        </CardBody>
      </Card>
    </Dialog>
  )
}

export default PostDeleteDialog