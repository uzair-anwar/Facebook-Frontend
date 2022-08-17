import React from "react";
import ShowDraft from "./ShowDraft";

const Draft = ({ userId, draftPost, setDraftPost }) => {
  return draftPost?.map((post) => (
    <div key={post.id}>
      <ShowDraft
        draftPost={post}
        draftAllPosts={draftPost}
        setDraftAllPosts={setDraftPost}
        userId={userId}
      />
    </div>
  ));
};

export default Draft;
