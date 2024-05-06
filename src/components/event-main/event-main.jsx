import React from "react";
import { Button, Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function EventMain() {
  return (
    <div>
      <div className="h-80">
        <Carousel className="rounded-xl">
          <div className=" relative h-full w-full">
            <div className=" relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className=" absolute bottom-10 w-3/4 ml-36 p-3 bg-black/50 flex flex-row rounded-lg">
              <div className=" w-5/6 text-white ">
                <div>
                  <h2 className=" text-3xl mb-1">Event name</h2>
                </div>
                <div className=" text-xs text-white/80">
                  *<span>from 00/00/0000 </span> <span>to 00/00/0000</span>
                </div>
              </div>
              <div className=" w-1/6 flex flex-col justify-center items-center">
                <Button className=" bg-white text-black duration-150 hover:scale-90 ">
                  Enroll
                </Button>
                <div>
                  <Link>
                    <span className=" text-white text-xs underline duration-150 hover:text-blue-300">
                      details
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative h-full w-full">
            <div className=" relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className=" absolute bottom-10 w-3/4 ml-36 p-3 bg-black/50 flex flex-row rounded-lg">
              <div className=" w-5/6 text-white ">
                <div>
                  <h2 className=" text-3xl mb-1">Event name</h2>
                </div>
                <div className=" text-xs text-white/80">
                  *<span>from 00/00/0000 </span> <span>to 00/00/0000</span>
                </div>
              </div>
              <div className=" w-1/6 flex flex-col justify-center items-center">
                <Button className=" bg-white text-black duration-150 hover:scale-90 ">
                  Enroll
                </Button>
                <div>
                  <Link>
                    <span className="text-white text-xs underline duration-150 hover:text-blue-300">
                      details
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative h-full w-full">
            <div className=" relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className=" absolute bottom-10 w-3/4 ml-36 p-3 bg-black/50 flex flex-row rounded-lg">
              <div className=" w-5/6 text-white ">
                <div>
                  <h2 className=" text-3xl mb-1">Event name</h2>
                </div>
                <div className=" text-xs text-white/80">
                  *<span>from 00/00/0000 </span> <span>to 00/00/0000</span>
                </div>
              </div>
              <div className=" w-1/6 flex flex-col justify-center items-center">
                <Button className=" bg-white text-black duration-150 hover:scale-90 ">
                  Enroll
                </Button>
                <div>
                  <Link>
                    <span className="text-white text-xs underline duration-150 hover:text-blue-300">
                      details
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
