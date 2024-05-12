import { Button, Switch } from "@material-tailwind/react";
import React from "react";

export default function SettingPage() {
  return (
    <div className=" pl-5 pt-3 ">
      <div className=" mb-5">
        <h1 className=" text-4xl font-bold ">Setting</h1>
      </div>
      <div className="mb-5">
        <h2 className=" text-2xl font-bold mb-2">Change profile</h2>
        <Button color="blue">Go to profile</Button>
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
      <div className=" mb-5">
        <h2 className=" text-2xl font-bold mb-2">Dark mode</h2>
        <div className=" pl-1">
          <Switch label="Dark mode" className=" pl-2 " color="blue" />
        </div>
      </div>
    </div>
  );
}
