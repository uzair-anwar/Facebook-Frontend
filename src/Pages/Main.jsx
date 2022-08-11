import React, { useState, useEffect } from "react";
import "../StyleSheets/posts-style.css";
import Navbar from "../Components/Navebar";
import CreatePost from "../Components/CreatePost";
import ShowPost from "../Components/ShowPost";
import { getAllPosts } from "../Services/posts";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [userId] = useState(localStorage.getItem("userId"));

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
