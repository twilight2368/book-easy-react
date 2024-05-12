import { PaperAirplaneIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Button, Card, Input } from "@material-tailwind/react";
import { useState } from "react";

export default function ChatMain() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      {open ? (
        <div>
          <div className=" fixed bottom-0 h-[500px] w-96 right-16">
            <Card className="h-full w-full pt-1 shadow-lg shadow-blue-300 ">
              <div className=" h-14 border-b-2 border-b-blue-300/50 p-2 flex flex-row items-center ">
                <div className=" w-5/6 pl-5 font-black text-lg">@username</div>
                <div className=" pl-5 ">
                  <Button
                    variant="text"
                    className=" rounded-full p-2"
                    onClick={() => {
                      handleOpen();
                    }}
                  >
                    <XMarkIcon className=" h-6 w-6 text-red-600 " />
                  </Button>
                </div>
              </div>
              <div className="w-full h-96 overflow-y-auto"></div>
              <div className=" flex flex-row items-center border-t-2 gap-2 p-2 px-3 border-t-blue-300/50">
                <Input label="Message" color="blue" />
                <Button size="sm" color="blue" className=" p-2 " variant="text">
                  <PaperAirplaneIcon className=" h-6 w-6 text-blue-600" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
