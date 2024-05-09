import {
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  Avatar,
  Card,
} from "@material-tailwind/react";
import React from "react";
import PostMenu from "./PostMenu";

export default function Post() {
  return (
    <div>
      <Card className="w-full min-w-96 min-h-96 ">
        <div className=" py-3 px-5 flex gap-2">
          <div className=" flex items-center justify-center">
            <Avatar
              className=" h-10 w-10"
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
            />
          </div>
          <div className=" w-5/6 pl-1 pt-1 pb-1">
            <div className=" font-bold text-black">@user_name</div>
            <div className=" text-xs ">1 hour ago</div>
          </div>
          <div>
            <PostMenu />
          </div>
        </div>
        <div className=" h-32 w-full overflow-y-hidden px-5 text-sm text-pretty mb-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quasi,
          sequi odio est neque doloremque a veniam quis facilis? Culpa,
          asperiores facere. Voluptas quia totam similique suscipit! Rem, quos
          rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime, quos eveniet recusandae ullam dolorum fugit sequi tempora
          corrupti, sunt nobis provident. Natus libero exercitationem, in hic
          eligendi quia ullam repellat!
        </div>
        <div className=" h-96 w-full px-5 mb-5">
          <img
            className="h-96 w-full rounded-lg object-cover object-center"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="nature image"
          />
        </div>

        <div className=" h-5 mb-5 flex px-5 justify-between items-center text-sm">
          <div className=" pl-2 flex">
            <div className=" flex">
              <div className=" flex justify-center items-center mr-1">
                <HeartIcon className=" h-5 w-5 duration-200 hover:fill-red-400 hover:scale-125 hover:text-red-400 active:scale-95 " />
              </div>
              <div className=" flex justify-center items-center">
                <span>{1000}</span>
              </div>
            </div>
          </div>
          <div className=" pr-2">
            <span className=" text-sm underline duration-200 hover:text-blue-600">details</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
