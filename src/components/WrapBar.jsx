import React from "react";
import MyNavbar from "./Navbar";
import { MySidebar } from "./SideBar";

export default function WrapBar(props) {
  return (
    <div>
      <div className="min-h-screen">
        <div className="navbar h-24 w-full">
          <MyNavbar />
        </div>
        <div className=" flex flex-cols w-full ">
          <div className="sidebar w-1/6 h-full">
            <MySidebar />
          </div>
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
}
