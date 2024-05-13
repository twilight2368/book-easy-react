import { PaperAirplaneIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Button, Card, Input } from "@material-tailwind/react";
import { useState, useRef } from "react";
import "react-chat-elements/dist/main.css";
import { MessageBox } from "react-chat-elements";

export default function ChatMain(props) {
  const [messagesList, setMessagesList] = useState([]);
  const [messageInput, setMessageInput] = useState();
  return (
    <>
      {props.isChatOpen ? (
        <div>
          <div className=" fixed bottom-0 h-[500px] w-96 right-16">
            <Card className="h-full w-full pt-1 shadow-lg shadow-blue-300 ">
              <div className=" h-14 border-b-2 border-b-blue-300/30 p-2 flex flex-row items-center drop-shadow-md ">
                <div className=" w-5/6 pl-3 font-black text-lg">@username</div>
                <div className=" pl-5 ">
                  <Button
                    variant="text"
                    color="red"
                    className=" rounded-full p-1"
                    onClick={() => {
                      props.setIsChatOpen();
                    }}
                  >
                    <XMarkIcon className=" h-5 w-5 text-red-600 " />
                  </Button>
                </div>
              </div>
              <div className="w-full h-96 overflow-y-auto overflow-x-visible px-0.5 pt-2 bg-blue-100/20">
                {messagesList.map(({ message, you_sent, date }) => {
                  return (
                    <>
                      <MessageBox
                        position={you_sent ? "right" : "left"}
                        type={"text"}
                        text={message}
                        date={date}
                      />
                    </>
                  );
                })}
              </div>
              <div className="flex flex-row gap-2 border-t-2  p-2 px-3 border-t-blue-300/30">
                <Input
                  label="Message"
                  color="blue"
                  value={messageInput}
                  onChange={(e) => {
                    e.preventDefault();
                    setMessageInput(e.target.value);
                  }}
                />
                <Button
                  size="sm"
                  color="blue"
                  className=" p-2 "
                  variant="text"
                  onClick={(e) => {
                    e.preventDefault();
                    if (messageInput) {
                      if (messageInput.trim().length !== 0) {
                        setMessagesList((messagesList) => [
                          ...messagesList,
                          {
                            you_sent: true,
                            message: messageInput,
                            date: new Date(),
                          },
                        ]);
                        setMessageInput("");
                      }
                    }
                  }}
                >
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
