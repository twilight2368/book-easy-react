import { Button, Switch } from "@material-tailwind/react";
import React, { useContext } from "react";
import WrapBar from "../../components/WrapBar";
import ChangeProfile from "../../components/change-profile/ChangeProfile";


export default function SettingPage() {
<<<<<<< HEAD
  const[openChangeProfile, setOpenChangeProfile] = React.useState(false);
  const handleOpenChangeProfile = () => setOpenChangeProfile((cur) => !cur);
=======

>>>>>>> cb85e1a6e8105d47a1c998bf526c21dfc3fb8065
  return (
    <WrapBar>
      <div className=" pl-5 pt-3 ">
        <div className=" mb-5">
          <h1 className=" text-4xl font-bold ">Setting</h1>
        </div>
        <div className="mb-5">
          <h2 className=" text-2xl font-bold mb-2">Change profile</h2>
          <Button color="blue" onClick={handleOpenChangeProfile}>Go to profile</Button>
          <ChangeProfile
          open = {openChangeProfile}
          handleOpen = {handleOpenChangeProfile}
          />
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
