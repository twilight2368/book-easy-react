import React, { useState } from "react";
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
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import ChatMain from "../chat/ChatMain";

const ChatMenuItems = [
  {
    name: "username1",
    last_message: "message is displayed here",
    you_sent: false,
    read: false,
  },
  {
    name: "username2",
    last_message: "message is displayed here",
    you_sent: true,
    read: true,
  },
  {
    name: "username3",
    last_message: "message is displayed here",
    you_sent: false,
    read: true,
  },
];

export default function ChatNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom">
        <Badge>
          <MenuHandler>
            <Button
              variant="text"
              className="h-10 w-10 bg-blue-100/20 rounded-full flex justify-center items-center p-0.5"
            >
              <ChatBubbleOvalLeftEllipsisIcon className="text-blue-300  p-1" />
            </Button>
          </MenuHandler>
        </Badge>
        <MenuList className="p-2 w-[500px] overflow-y-auto overflow-x-clip">
          {ChatMenuItems.map(({name, last_message, you_sent, read}) => {
            return (
              <MenuItem
                onClick={() => {
                  closeMenu();
                  setIsChatOpen(true);
                }}
                className={`flex items-center gap-2 h-14 rounded ${!read ? "bg-blue-300/20 text-black font-black hover:font-medium" : ""}`}
              >
                <div>
                  <div className=" mb-1">
                    <span className="font-bold ">@{name}</span>
                  </div>
                  <div className=" flex flex-row ">
                    <div>
                      {you_sent ? (
                        <>
                          <span className=" mr-1 text-black font-black ">you:</span>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className=" overflow-x-hidden overflow-y-hidden">{last_message}</div>
                  </div>
                </div>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <div>
        <ChatMain isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
      </div>
    </>
  );
}
