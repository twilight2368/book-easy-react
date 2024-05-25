import React, { useEffect } from "react";
import Post from "../components/posts/Post";
import { Avatar, Button, Card } from "@material-tailwind/react";
import EventList from "../components/event-list/EventList";
import { AddPostDiag } from "../components/add-post/AddPostDiag";
import EventDetailsCover from "../components/event-details/EventDetailsCover";
import WrapBar from "../components/WrapBar";

export default function EventDetails() {
  const [posts, setPosts] = React.useState([]);

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
        <div className=" w-full h-full grid grid-cols-9">
          <EventDetailsCover />
          <div className=" col-span-6 flex flex-col items-center gap-4">
            <Card className="w-2/3 min-w-96 flex flex-row items-center gap-2 py-3 px-5">
              <div className=" flex items-center justify-center">
                <Avatar
                  className=" h-10 w-10"
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="avatar"
                />
              </div>
              <div className=" w-full">
                <AddPostDiag />
              </div>
            </Card>
            
            {postList}

          </div>
          <EventList />
        </div>
      </WrapBar>
    </>
  );
}
