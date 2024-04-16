import {
  List,
  ListItem,
  ListItemSuffix,
  Card,
  Checkbox,
} from "@material-tailwind/react";
import React from "react";

export default function Explore() {
  return (
    <div>
      <div className=" w-full grid grid-cols-9">
        <div className=" col-span-7"> hi </div>
        <div className=" col-span-2">
          <Card className=" min-h-96">
            <List>
              <h2 className=" m-3 font-black text-xl montserrat-font text-gray-900 ">
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
          </Card>
        </div>
      </div>
    </div>
  );
}
