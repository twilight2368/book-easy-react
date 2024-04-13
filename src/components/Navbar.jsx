import React from "react";
import Logo from "../assets/images/books.png";
import { Button, Input } from "@material-tailwind/react";
import { CiSearch } from "react-icons/ci";

export default function MyNavbar() {
  return (
    <div className=" w-full">
      <div className="h-full w-full shadow-md  grid grid-cols-5 items-center justify-center align-baseline">
        <div className=" pl-28 h-full flex gap-1 items-center  select-none col-span-2">
          <img src={Logo} alt="" className=" block h-20" />
          <div className="madimi-one-regular text-3xl text-blue-300">
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
              className="!absolute right-1 top-[2.8px] rounded flex items-center justify-center bg-blue-300"
            >
              <CiSearch className=" text-lg text-white " />
            </Button>
          </div>
        </div>
        <div className=" flex gap-3 justify-center items-center">
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
      </div>
    </div>
  );
}
