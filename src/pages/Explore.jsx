import {
  List,
  ListItem,
  ListItemSuffix,
  Card,
  Checkbox,
} from "@material-tailwind/react";
import React from "react";
import BookDisplay from "../components/books/BookDisplay";

export default function Explore() {
  return (
    <div className=" w-full">
      <div className=" mt-4 w-full pl-10">
        <h1 className=" font-black text-lg ">All books ({1000})</h1>
      </div>
      <div className=" w-full grid grid-cols-10 mt-4">
        <div className=" col-span-8 px-10 mt-4">
          <div className=" w-full h-full grid grid-cols-3 gap-10">
            <div>
              <BookDisplay />
            </div>
            <div>
              <BookDisplay />
            </div>
            <div>
              <BookDisplay />
            </div>

            <div>
              <BookDisplay />
            </div>
            <div>
              <BookDisplay />
            </div>
            <div>
              <BookDisplay />
            </div>
          </div>
        </div>
        <div className=" col-span-2">
          <div className=" min-h-96 pr-10">
            <List className="nunito-font">
              <h2 className=" m-3 font-black text-xl nunito-font text-gray-900 ">
                Filter:
              </h2>
              <ListItem ripple={false} className="py-1 pr-1 pl-4">
                Item One
                <ListItemSuffix>
                  <Checkbox variant="text" color="blue-gray"></Checkbox>
                </ListItemSuffix>
              </ListItem>
              <ListItem ripple={false} className="py-1 pr-1 pl-4">
                Item Two
                <ListItemSuffix>
                  <Checkbox variant="text" color="blue-gray"></Checkbox>
                </ListItemSuffix>
              </ListItem>
              <ListItem ripple={false} className="py-1 pr-1 pl-4">
                Item Three
                <ListItemSuffix>
                  <Checkbox variant="text" color="blue-gray"></Checkbox>
                </ListItemSuffix>
              </ListItem>
              <ListItem ripple={false} className="py-1 pr-1 pl-4">
                Item Three
                <ListItemSuffix>
                  <Checkbox variant="text" color="blue-gray"></Checkbox>
                </ListItemSuffix>
              </ListItem>
              <ListItem ripple={false} className="py-1 pr-1 pl-4">
                Item Three
                <ListItemSuffix>
                  <Checkbox variant="text" color="blue-gray"></Checkbox>
                </ListItemSuffix>
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
}
