import React, { useEffect, useState } from "react";
import Post from "../components/posts/Post";
import { Avatar, Button, Card } from "@material-tailwind/react";
import EventList from "../components/event-list/EventList";
import { AddPostDiag } from "../components/add-post/AddPostDiag";
import EventDetailsCover from "../components/event-details/EventDetailsCover";
import WrapBar from "../components/WrapBar";
import { useParams } from "react-router";
import { useCookies } from "react-cookie";

export default function EventDetails() {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [posts, setPosts] = useState([]);
  const [event, setEvent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      await fetch(`http://localhost:8080/api/v1/events/${id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setEvent(data);
      })
      .catch(err => {
        console.log(err);
      })
    }

    const fetchPosts = async () => {
      await fetch(`http://localhost:8080/api/v1/posts/find-by-event?id=${id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setPosts(data.content);
        console.log(data.content);
      })
      .catch(err => {
        console.log(err);
      })
    }
    
    fetchEvent();
    fetchPosts();
  }, [id]);

  const postList = posts.map((post) => 
    <Post
      key={post.id}
      post={post}
    />
  )

  return (
    <>
      <WrapBar>
        <div className=" w-full h-full grid grid-cols-9">
          <EventDetailsCover
            event={event}
          />
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
                  <AddPostDiag eventId={id} />
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
