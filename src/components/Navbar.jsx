import React from "react";
import Logo from "../assets/images/books.png";
import {
  Button,
  Input,
  Badge,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon,
} from "@heroicons/react/24/solid";

import ProfileMenu from "./profile-menu/ProfileMenu";
import NotifyMenu from "./notification-menu/NotifyMenu";

export default function MyNavbar() {
  return (
    <div className=" w-full bg-white fixed top-0 z-50 h-20">
      <div className="h-full w-full shadow-md  grid grid-cols-5 items-center justify-center align-baseline">
        <div className=" pl-20 h-full flex gap-1 items-center  select-none col-span-2">
          <img src={Logo} alt="" className=" block h-14" />
          <div className="madimi-one-regular text-2xl text-blue-300">
            Book Exchange
          </div>
        </div>
        <div></div>
        <div>
          <div className="relative flex w-full max-w-[24rem]">
            <Input
              type="text"
              label="Search"
              color="blue"
              className="pr-20 "
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              color={true ? "gray" : "blue-gray"}
              disabled={false}
              className="!absolute right-1 top-[3px] rounded flex items-center justify-center bg-blue-300"
            >
              <MagnifyingGlassIcon className=" text-lg text-white h-4 w-4 " />
            </Button>
          </div>
        </div>
        <div>
          {false ? (
            <>
              <div className=" flex gap-5 justify-center items-center">
                <Button
                  size="md "
                  variant="outlined"
                  className=" border-blue-300 text-blue-500 montserrat-font"
                >
                  Register
                </Button>
                <Button
                  size="md"
                  varient="filled"
                  className=" bg-blue-500 montserrat-font"
                >
                  Login
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className=" pl-36 pr-4 grid grid-cols-3 gap-3 items-center">
                <div className="flex justify-center items-center ">
                  <NotifyMenu />
                </div>
                <div className="flex justify-center items-center ">
                  <Badge color="red">
                    <Button
                      variant="text"
                      className="h-10 w-10 rounded-full bg-blue-gray-100/30 flex justify-center items-center p-1"
                    >
                      <ChatBubbleOvalLeftEllipsisIcon className=" h-10 w-10 text-blue-300 rounded-full p-0.5" />
                    </Button>
                  </Badge>
                </div>
                <div className="flex justify-center items-center ">
                  <ProfileMenu />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
