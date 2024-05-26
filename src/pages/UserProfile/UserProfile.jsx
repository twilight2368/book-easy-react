import React from "react";
import WrapBar from "../../components/WrapBar";
import { Button } from "@material-tailwind/react";
import ChangeProfile from "../../components/change-profile/ChangeProfile";
import { useParams } from "react-router";
import { useCookies } from "react-cookie";
const [cookies, setCookie] = useCookies(['accessToken', 'user']);
console.log(cookies['user']);
export default function UserProfile() {
  const[openChangeProfile, setOpenChangeProfile] = React.useState(false);
  const handleOpenChangeProfile = () => setOpenChangeProfile((cur) => !cur);
  return (
    <WrapBar>
      <div class="flex flex-col justify-center items-center h-[100vh]">
        <div class="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
          <div class="mt-2 mb-8 w-full">
            <h1 class="px-2 text-xl font-bold text-navy-700 dark:text-white">
              Profile
            </h1>
          </div>
          <div className="relative mb-4">
            <img
              className="w-24 h-24 rounded-full border-4 border-gray-600"
              src="https://via.placeholder.com/96"
              alt="avatar"
            />
            <label
              htmlFor="upload-file"
              className="absolute bottom-0 right-0 bg-yellow-500 text-gray-900 p-2 rounded-full cursor-pointer hover:bg-yellow-600"
            >
              +
            </label>
            <input
              type="file"
              id="upload-file"
              className="hidden"
              accept="image/png, image/jpeg"
            />
          </div>
          <div class="grid grid-cols-2 gap-4 px-2 w-full">
            <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p class="text-sm text-gray-600">Name</p>
              <p class="text-base font-medium text-navy-700 dark:text-white">
                Nguyen Van A
              </p>
            </div>

            <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p class="text-sm text-gray-600">Password</p>
              <p class="text-base font-medium text-navy-700 dark:text-white">
                *****************
              </p>
            </div>

            <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p class="text-sm text-gray-600">Role</p>
              <p class="text-base font-medium text-navy-700 dark:text-white">
                BOOK_EXCHANGER
              </p>
            </div>

            <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p class="text-sm text-gray-600">Gender</p>
              <p class="text-base font-medium text-navy-700 dark:text-white">
                Male
              </p>
            </div>

            

            <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p class="text-sm text-gray-600">Address</p>
              <p class="text-base font-medium text-navy-700 dark:text-white">
                So 3, ngo 234, Phuong A, Quan B, Ha Noi
              </p>
            </div>

            <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p class="text-sm text-gray-600">Birthday</p>
              <p class="text-base font-medium text-navy-700 dark:text-white">
                20 July 1986
              </p>
            </div>
          </div>
          <div className="py-10">
            <Button className="w-36 bg-blue-500 text-white" onClick={handleOpenChangeProfile}>Edit</Button>
            <ChangeProfile
          open = {openChangeProfile}
          handleOpen = {handleOpenChangeProfile}
          />
          </div>
        </div>
      </div>
    </WrapBar>
  );
}
