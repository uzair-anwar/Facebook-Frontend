import React from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const EditDraftPost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state.post;
  const posts = location.state.posts;

  const notify = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const formik = useFormik({
    initialValues: {
      title: post.title,
      content: post.content,
    },

    onSubmit(values) {
      const index = posts.findIndex((data) => data.id === post.id);
      posts[index].title = values.title;
      posts[index].content = values.content;

      localStorage.removeItem("draftPost");
      localStorage.setItem("draftPost", JSON.stringify(posts));
      notify("Post updated successfully");
      navigate("/posts");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="edit-form">
      <div className="form">
        <h2>Update your post</h2>
        <TextField
          label="Title"
          variant="standard"
          className="title-input"
          id="title"
          name="title"
          type="text"
          placeholder="Enter Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.title && formik.errors.title ? (
          <div className="error-msg">{formik.errors.title}</div>
        ) : null}

        <TextField
          label="Content"
          multiline
          maxRows={5}
          id="outlined-multiline-static"
          className="content-input"
          name="content"
          type="text"
          placeholder="Enter Content"
          value={formik.values.content}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.content && formik.errors.content ? (
          <div className="error-msg">{formik.errors.content}</div>
        ) : null}

        <div className="create-btn">
          <Button variant="contained" type="submit">
            Update
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EditDraftPost;
