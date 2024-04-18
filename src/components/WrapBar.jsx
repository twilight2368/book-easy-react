import React from "react";
import MyNavbar from "./Navbar";
import { MySidebar } from "./SideBar";

export default function WrapBar(props) {
  return (
    <div>
      <div className="min-h-screen bg-secondary">
        <div className="navbar h-24 w-full bg-secondary">
          <MyNavbar />
        </div>
        <div className=" flex flex-cols w-full ">
          <div className="sidebar w-1/6 h-full bg-secondary">
            <MySidebar />
          </div>
          <div className=" w-5/6 h-full pr-3 mb-40 bg-secondary">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
