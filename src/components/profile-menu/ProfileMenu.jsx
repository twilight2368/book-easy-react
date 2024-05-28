import React from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightStartOnRectangleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    link: "profile",
  },
  {
    label: "Sign Out",
    icon: ArrowRightStartOnRectangleIcon,
    link: "logout",
  },
];

export default function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className=" rounded-full h-10 w-10 bg-blue-100/20 py-0 pr-0 pl-0 "
        >
          <UserIcon className=" h-10 w-10 text-blue-300 fill-blue-300  rounded-full p-1.5" />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, link }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => {
                closeMenu();
                if (isLastItem) {
                  //todo: Logout user
                  navigate("/login");
                } else {
                  navigate("/" + link + "/");
                }
              }}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-5 w-5 ${
                  isLastItem ? "text-red-500" : "text-blue-500"
                }`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
