import { Button } from "@material-tailwind/react";
import React from "react";
import WrapBar from "../../components/WrapBar";
import { Link } from "react-router-dom";



export default function SettingPage() {
 

  return (
    <WrapBar>
      <div className=" pl-5 pt-3 ">
        <div className=" mb-5">
          <h1 className=" text-4xl font-bold ">Setting</h1>
        </div>
        <div className="mb-5">
          <h2 className=" text-2xl font-bold mb-2">Change profile</h2>
          <Button color="blue" >
            <Link to = "/profile">
            Go to profile
            </Link></Button>
          
        </div>
        <div className="mb-5">
          <h2 className=" text-2xl font-bold mb-2">Change username</h2>
          <Button color="blue" variant="outlined">
            Change username
          </Button>
        </div>
        <div className="mb-5">
          <h2 className=" text-2xl font-bold mb-2">Change password</h2>
          <Button color="blue" variant="outlined">
            Change password
          </Button>
        </div>
      </div>
    </WrapBar>
  );
}
