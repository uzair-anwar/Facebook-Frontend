const axios = require("axios").default;
const token = localStorage.getItem("token");

const getAllPosts = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `${process.env.REACT_APP_SERVER_API}/post/show`,
      headers: {
        "x-access-token": token,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    return error.message;
  }
};

const createPost = async (post) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_SERVER_API}/post/create`,
      data: {
        title: post.title,
        content: post.content,
        userId: post.userId,
      },
      headers: {
        "x-access-token": token,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    return error.message;
  }
};

const deletePost = async (id) => {
  try {
    const response = await axios({
      method: "delete",
      url: `${process.env.REACT_APP_SERVER_API}/post/${id}`,

      headers: {
        "x-access-token": token,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    return error.message;
  }
};

const editPost = async (post) => {
  try {
    const response = await axios({
      method: "put",
      url: `${process.env.REACT_APP_SERVER_API}/post/edit/${post.id}`,
      headers: {
        "x-access-token": token,
        "Content-Type": "application/json",
      },
      data: {
        title: post.title,
        content: post.content,
      },
    });

    return response.data;
  } catch (error) {
    return error.message;
  }
};

module.exports = { getAllPosts, createPost, deletePost, editPost };
