import React, { useEffect, useState } from "react";
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
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/solid";
import "./Notify.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import environment from "../../environment";
import NotifyItem from "./NotifyItem";

export default function NotifyMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const [notifications, setNotifications] = useState([]);
  const [cookies, setCookie] = useCookies(['user', 'accessToken']);
  const thisUser = cookies['user'];

  const navigate = useNavigate();

  const fetchData = async () => {
    if (!thisUser) {
      window.alert("Your session has expired. Please sign in again.");
      navigate('/login');
      return;
    }

    const response = await fetch(`${environment.apiUrl}/users/${thisUser.id}/notifications`);
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      console.log(data.message);
      return;
    }

    setNotifications(data.content);
  }

  useEffect(() => {
    fetchData();
  }, []);

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
        { notifications.length == 0 ? (
          <Typography>No notifications.</Typography>
        ) : notifications.map((notification) => (
            <NotifyItem key={notification.id} notification={notification} />
        ))}
      </MenuList>
    </Menu>
  );
}
