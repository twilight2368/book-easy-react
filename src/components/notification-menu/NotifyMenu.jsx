import React from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Badge,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightStartOnRectangleIcon,
  UserIcon,
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/solid";
import "./Notify.css";

const NotificationMenuItems = [
  {
    label: "Someone offered your book",
    icon: InformationCircleIcon,
    type: "information",
  },
  {
    label: "Transaction success",
    icon: CheckCircleIcon,
    type: "success",
  },
  {
    label: "Somethings went wrong",
    icon: XCircleIcon,
    type: "error",
  },
  {
    label: "Warning",
    icon: ExclamationTriangleIcon,
    type: "warning",
  },
];

export default function NotifyMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom">
      <Badge>
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className=" rounded-full h-10 w-10 bg-blue-100/20 py-0 pr-0 pl-0 "
          >
            <BellIcon className="h-10 w-10 text-blue-300 fill-blue-300  rounded-full p-1.5" />
          </Button>
        </MenuHandler>
      </Badge>
      <MenuList className="p-2 w-[500px] overflow-y-auto overflow-x-clip">
        {NotificationMenuItems.map(({ label, icon, type }) => {
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 h-12 rounded`}
            >
              {React.createElement(icon, {
                className: `h-5 w-5 ${type}`,
                strokeWidth: 2,
              })}
              <Typography as="span" variant="small" className="font-normal">
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
