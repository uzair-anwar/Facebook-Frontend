import React from "react";
import ShowDraft from "./ShowDraft";

const Draft = ({ userId, draftPost, setDraftPost }) => {
  return draftPost?.map((post) => (
    <ShowDraft
      draftPost={post}
      draftPosts={draftPost}
      setDraftPosts={setDraftPost}
      userId={userId}
    />
  ));
};

export default Draft;
