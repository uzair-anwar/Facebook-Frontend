import React, { useState, useEffect } from "react";
import "../StyleSheets/posts-style.css";
import Navbar from "../Components/Navebar";
import CreatePost from "../Components/CreatePost";
import ShowPost from "../Components/ShowPost";
import { getAllPosts } from "../Services/posts";
import Draft from "../Components/Draft";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [draftPost, setDraftPost] = useState([]);
  const [active, setActive] = useState("Posts");

  const tempUserId = useState(localStorage.getItem("userId"));
  const userId = useState(tempUserId[0]);
  const [localDraftPosts, setLocalDraftPosts] = useState(null);

  useEffect(() => {
    getAllPosts().then((response) => {
      if (response.status === 200) {
        setPosts(response.result.reverse());
      }
    });

    setLocalDraftPosts(localStorage.getItem("draftPost"));
    if (localDraftPosts !== null) {
      setDraftPost(JSON.parse(localDraftPosts));
    }
  }, []);

  return (
    <>
      <Navbar setActive={setActive} />
      {active === "Posts" && (
        <>
          <CreatePost
            posts={posts}
            setPosts={setPosts}
            userId={userId}
            draftPost={draftPost}
            setDraftPost={setDraftPost}
          />

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
      )}

      {active === "Draft" && (
        <Draft
          userId={userId}
          draftPost={draftPost}
          setDraftPost={setDraftPost}
        />
      )}
    </>
  );
};

export default Main;
