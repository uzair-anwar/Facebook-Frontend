import React, { useState, useEffect } from "react";
import "../StyleSheets/posts-style.css";
import Navbar from "../Components/Navebar";
import CreatePost from "../Components/Post/CreatePost";
import ShowPost from "../Components/Post/ShowPost";
import { getAllPosts } from "../Services/posts";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const tempUserId = useState(localStorage.getItem("userId"));
  const [userId] = useState(tempUserId[0]);

  useEffect(() => {
    getAllPosts().then((response) => {
      if (response.status === 200) {
        setPosts(response.result);
      }
    });
  }, []);

  return (
    <>
      <Navbar />

      <CreatePost posts={posts} setPosts={setPosts} userId={userId} />

      {posts?.map((post) => (
        <div key={post.id}>
          <ShowPost
            post={post}
            posts={posts}
            userId={userId}
            setPosts={setPosts}
          />
        </div>
      ))}
    </>
  );
};

export default Main;
