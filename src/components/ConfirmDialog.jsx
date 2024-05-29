import { Button, Dialog, DialogFooter, DialogHeader, Typography } from "@material-tailwind/react";

const ConfirmDialog = (props) => {
    const { message, open, handleOpen, handleCancel, handleConfirm } = props;

    return (
        <Dialog open={open} handler={handleOpen}>
        {/* <DialogHeader>Its a simple dialog.</DialogHeader> */}
        <DialogHeader>
            <Typography className="text-lg font-inter font-medium">{ message }</Typography>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleCancel}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" className="bg-[#64b5f6]" onClick={handleConfirm}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    );
}

export default ConfirmDialog;