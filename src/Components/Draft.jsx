import React from "react";
import ShowDraft from "./ShowDraft";

const Draft = ({ userId, draftPost, setDraftPost }) => {
  return draftPost?.map((post) => (
    <div key={post.id}>
      <ShowDraft
        draftPost={post}
        draftPosts={draftPost}
        setDraftPosts={setDraftPost}
        userId={userId}
      />
    </div>
  ));
};

export default Draft;
