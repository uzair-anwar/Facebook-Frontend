import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../StyleSheets/posts-style.css";
import { Button, TextField } from "@material-ui/core";
import { createPost } from "../../Services/posts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const CreatePost = ({ posts, setPosts, userId }) => {
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

  const onSubmit = async (values) => {
    const newPost = {
      title: values.title,
      content: values.content,
      userId: userId,
    };

    await createPost(newPost).then((response) => {
      if (response.status === 201) {
        notify(response.message);
        values.title = "";
        values.content = "";
      } else if (response.status === 400) {
        notify(response.message);
      }
    });

    const updatedPosts = [...posts];
    updatedPosts.push(newPost);
    setPosts(updatedPosts);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      content: Yup.string()
        .required("Required")
        .min(20, "Content should be greater then 20 character"),
    }),

    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="edit-form">
      <div className="form">
        <h2>Create your post</h2>

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
          maxRows={4}
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
            Create
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
