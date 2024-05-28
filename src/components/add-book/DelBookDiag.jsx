import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { Alert } from "@material-tailwind/react";
import { useNavigate } from "react-router";

export function DelBookDiag(props) {
  const { bookId } = props;
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(!open);

  const deleteBook = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/books/${bookId}`, {
        method: "DELETE"
      });
      if (response.ok) {
        const data = response.json();
        navigate(0);
      }
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <>
      <IconButton onClick={handleOpen} className="bg-black/0">
        {props.children}
      </IconButton>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Delete Book</DialogHeader>
        <DialogBody>
          <Alert
            icon={<IconAlert />}
            className="rounded-none border-l-4 border-red-600 bg-red-300/10 font-medium text-red-600"
          >
            <span className=" text-black">Proceed with caution: this action cannot be undone.</span>
          </Alert>
        </DialogBody>
        <DialogFooter className=" flex flex-row justify-center items-center">
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="text" color="blue" onClick={deleteBook}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

function IconAlert() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
