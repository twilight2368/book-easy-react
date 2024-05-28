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
import { Stomp } from '@stomp/stompjs';
import { WebSocket } from "ws";
import * as SockJS from "sockjs-client";
import PushNotification from "./PushNotification";

export default function NotifyMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const [notifications, setNotifications] = useState([]);
  const [cookies, setCookie] = useCookies(['user', 'accessToken']);
  const thisUser = cookies['user'];

  const menuHandler = (val) => {
    setIsMenuOpen(val);
    // if (val) fetchData();
  }

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
  }, [isMenuOpen]);

  const [openPushNoti, setOpenPushNoti] = useState(false);
  const handleClosePushNoti = () => setOpenPushNoti(false);
  const [pushNoti, setPushNoti] = useState();


  // websocket
  const setUpWebSocket = () => {
    const mySocketFactory = () => new SockJS('http://localhost:8080/ws');
    const stompClient = Stomp.over(mySocketFactory);

    stompClient.connect({}, onConnect);  // Provide your credentials if needed

    function onConnect() {
      stompClient.subscribe(`/user/${thisUser.id}/notification`, onNotificationReceived);
    }

    function onNotificationReceived(message) {
      console.log(message.body);
      const notification = JSON.parse(message.body);
      setNotifications([notification, ...notifications]);
      setPushNoti(notification);
      setOpenPushNoti(true);
    }
  }

  useEffect(() => {
    setUpWebSocket();
  }, []);

  const unread = notifications.filter(n => !n.isRead).length;

  for (let i=0; i<notifications.length; i++) {
    if (notifications[i].href === 'transaction') {
      notifications[i].href = '/transactions';
    } else if (notifications[i].href.includes('/')) {
        const parts = notifications[i].href.split('/');
        if (parts[0] === 'book') {
          notifications[i].href = '/' + notifications[i].href;
        }
    }
  }

  return (
    <>
      <Menu open={isMenuOpen} handler={menuHandler} placement="bottom">
        <Badge content={unread} invisible={unread === 0}>
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
      <PushNotification open={openPushNoti} handleClose={handleClosePushNoti} notification={pushNoti} />
    </>
  );
}
