import React, { useContext } from "react";
import MyNavbar from "./Navbar";
import { MySidebar } from "./SideBar";
import "./wrapbar.css";
import Footer from "./Footer";

export default function WrapBar(props) {

  return (
    <div>
      <div>
        <div className="min-h-screen bg-secondary">
          <div className="navbar h-20 w-full bg-secondary ">
            <MyNavbar />
          </div>
          <div className=" flex flex-cols w-full wrapbar-height overflow-y-auto ">
            <div className="sidebar fixed w-1/6 h-full bg-secondary  ">
              <MySidebar />
            </div>
            <div className=" w-1/6 h-screen bg-secondary"></div>
            <div className=" w-5/6 pl-3  pr-3 pt-5 bg-secondary   ">
              <div className=" min-h-screen mb-40 ">{props.children}</div>
              <div>
                <Footer className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
