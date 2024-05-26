import React, { useEffect } from "react";
import Post from "../components/posts/Post";
import { AddEventDiag } from "../components/add-event/AddEventDiag";
import { Avatar, Button, Card } from "@material-tailwind/react";
import EventList from "../components/event-list/EventList";
import WrapBar from "../components/WrapBar";
import { useCookies } from "react-cookie";

export default function Events() {
  const [posts, setPosts] = React.useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  useEffect(() => {
    const fetchedPosts = [
      {
        title: "National resentment day",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quasi,
        sequi odio est neque doloremque a veniam quis facilis? Culpa,
        asperiores facere. Voluptas quia totam similique suscipit! Rem, quos
        rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maxime, quos eveniet recusandae ullam dolorum fugit sequi tempora
        corrupti, sunt nobis provident. Natus libero exercitationem, in hic
        eligendi quia ullam repellat!`
      },
      {
        title: "National resentment day",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quasi,
        sequi odio est neque doloremque a veniam quis facilis? Culpa,
        asperiores facere. Voluptas quia totam similique suscipit! Rem, quos
        rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maxime, quos eveniet recusandae ullam dolorum fugit sequi tempora
        corrupti, sunt nobis provident. Natus libero exercitationem, in hic
        eligendi quia ullam repellat!`
      }
    ]
    setPosts(fetchedPosts);
  }, []);

  const postList = posts.map((post) => 
    <Post 
      title={post.title}
      content={post.content}
    />
  )

  return (
    <>
      <WrapBar>
        <div className=" w-full h-full grid grid-cols-9 ">
          <div className=" col-span-6 flex flex-col items-center gap-4">
            {
              cookies['user'] &&
              <Card className="w-2/3 min-w-96 flex flex-row items-center gap-2 py-3 px-5">
                <div className=" flex items-center justify-center">
                  <Avatar
                    className=" h-10 w-10"
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                    alt="avatar"
                  />
                </div>
                <div className=" w-full">
                  <AddEventDiag />
                </div>
              </Card>
            }
            {postList}
          </div>
          <EventList />
        </div>
      </WrapBar>
    </>
  );
}
