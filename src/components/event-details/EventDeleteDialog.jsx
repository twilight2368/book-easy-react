import { Button, Card, CardBody, Dialog, Typography } from '@material-tailwind/react'
import React from 'react'
import { useNavigate } from 'react-router';

const EventDeleteDialog = (props) => {
  const { open, handleOpen, eventId } = props;
  const navigate = useNavigate();

  const deleteEvent = async () => {
    await fetch(`http://localhost:8080/api/v1/events/${eventId}`, {
      method: "DELETE"
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
    .then(data => {
      navigate('/events');
    })
    .catch(err => {
      console.log(err);
    })
  }

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
              The event will be removed permanently and will no longer be visible to other users.
            </Typography>
          </div>
        </div>
        <CardBody className="flex flex-col gap-4 max-h-[500px] overflow-y-auto scroll-smooth">
          <Button variant="gradient" color="red" onClick={deleteEvent}>
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

export default EventDeleteDialog