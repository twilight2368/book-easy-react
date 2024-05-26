import { EllipsisVerticalIcon, PencilIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { 
  IconButton, 
  Menu, 
  MenuHandler, 
  MenuItem, 
  MenuList, 
} from '@material-tailwind/react'
import React from 'react'
import EventEditDialog from './EventEditDialog';
import EventDeleteDialog from './EventDeleteDialog';

const EventMenu = (props) => {
  const { event } = props;
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false)
  const handleOpenEdit = () => setOpenEdit((cur) => !cur);
  const handleOpenDelete = () => setOpenDelete((cur) => !cur);

  return (
    <>
      <Menu>
        <MenuHandler>
          <div className="flex justify-center items-center ">
            <IconButton className=" h-10 w-10 bg-white" variant="filled">
              <EllipsisVerticalIcon className=" h-5 w-5 text-gray-500 " />
            </IconButton>
          </div>
        </MenuHandler>
        <MenuList>
          <MenuItem className="flex items-center" onClick={handleOpenEdit}>
            <PencilIcon className="h-4 w-4 mr-2"/>
            Edit
          </MenuItem>
          <MenuItem className="flex items-center" onClick={handleOpenDelete}>
            <TrashIcon className="h-4 w-4 mr-2"/>
            Delete
          </MenuItem>
        </MenuList>
      </Menu>
      <EventEditDialog
        open={openEdit}
        handleOpen={handleOpenEdit}
        event={event}
      />
      <EventDeleteDialog
        open={openDelete}
        handleOpen={handleOpenDelete}
        eventId={event.id}
      />
    </>
  )
}

export default EventMenu