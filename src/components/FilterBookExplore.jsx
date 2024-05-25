import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemPrefix,
  Card,
  Checkbox,
  Typography,
  Select,
  Radio,
  
} from "@material-tailwind/react";

export default function FilterBookExplore({ option, handleOptionChange }) {

  return (
    <>
      <Card className="pb-5">
        <h2 className="text-xl font-bold ml-5 mt-5 text-black">Lọc:</h2>
        <List>
          <ListItem className="p-0">
            <label
              htmlFor="filter-all"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <Radio
                id="filter-all"
                value="all"
                name="filter-options" // Nhóm radio button
                checked={option === 'all'} // Chọn "Tất cả" theo mặc định
                onChange={event => handleOptionChange(event.target.value)}
              />
              <Typography color="blue-gray" className="font-medium">
                Tất cả
              </Typography>
            </label>
          </ListItem>
          <ListItem className="p-0">
            <label
              htmlFor="filter-author"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <Radio
                id="filter-author"
                value="author"
                name="filter-options" // Nhóm radio button
                checked={option === 'author'}
                onChange={event => handleOptionChange(event.target.value)}
              />
              <Typography color="blue-gray" className="font-medium">
                Theo tác giả
              </Typography>
            </label>
          </ListItem>
        </List>
      </Card>
    </>
  );
}

