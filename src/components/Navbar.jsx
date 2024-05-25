import React, { useState } from "react";
import Logo from "../assets/images/books.png";
import { Button, Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { Link, useNavigate } from "react-router-dom";
import ProfileMenu from "./profile-menu/ProfileMenu";
import NotifyMenu from "./notification-menu/NotifyMenu";
import ChatNavbar from "./chat-navbar/ChatNavbar";
import { useCookies } from "react-cookie";

export default function MyNavbar() {
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();

  const [cookies, setCookie] = useCookies(['user']);

  return (
    <div className=" w-full bg-white fixed top-0 z-20 h-20">
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
                onChange={(e) => {
                  e.preventDefault();
                  setSearchParam(e.target.value);
                }}
              />
              <Button
                size="sm"
                color={true ? "gray" : "blue-gray"}
                disabled={false}
                className="!absolute right-1 top-[3px] rounded flex items-center justify-center bg-blue-300"
                onClick={(e) => {
                  e.preventDefault();
                  if (searchParam.trim().length > 0) {
                    navigate("/search/" + searchParam.trim());
                  }
                }}
              >
                <MagnifyingGlassIcon className=" text-lg text-white h-4 w-4 " />
              </Button>
          </div>
        </div>
        <div>
          {!cookies['user'] ? (
            <>
              <div className=" flex gap-5 justify-center items-center">
                <Link to="/register">
                  <Button
                    size="md "
                    variant="outlined"
                    className=" border-blue-300 text-blue-500 montserrat-font"
                  >
                    Register
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    size="md"
                    varient="filled"
                    className=" bg-blue-500 montserrat-font"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className=" pl-36 pr-4 grid grid-cols-3 gap-3 items-center">
                <div className="flex justify-center items-center ">
                  <NotifyMenu />
                </div>
                <div className="flex justify-center items-center ">
                  <ChatNavbar />
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
