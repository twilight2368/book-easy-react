import { Typography } from "@material-tailwind/react";
import React from "react";

export default function ChatBubble(props) {
  return (
    <div>
      {props.you_sent ? (
        <>
          <div className="text-right">
            <Typography className=" p-2 bg-blue-300 rounded-full  text-white break-words text-wrap whitespace-pre-wrap">
              {props.message}
            </Typography>
          </div>
        </>
      ) : (
        <>
          <div className="w-full text-left">
            <span className=" p-2 bg-red-300 rounded-full max-w-10 min-w-5 text-white break-words text-wrap whitespace-pre-wrap">
              {props.message}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
