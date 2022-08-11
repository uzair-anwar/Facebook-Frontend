import { Link } from "react-router-dom";
import "../StyleSheets/posts-style.css";
import { deletePost } from "../Services/posts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const ShowPost = ({ post, posts, userId, setPosts }) => {
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

  function removePost(id) {
    deletePost(id).then((response) => {
      if (response.status === 200) {
        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
        notify(response.message);
      } else if (response.status === 400) {
        notify(response.message);
      }
    });

    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  }

  return (
    <div key={post.id} className="post">
      <p>
        <i>{post.title}</i>
      </p>

      <p className="content">{post.content}</p>

      {post.userId == userId ? (
        <div className="buttons">
          <button className="update-btn common-btn">
            <Link
              className="update-link"
              to={"/Post/" + post.id + "/edit"}
              state={{ post: post, posts: posts }}
            >
              {" "}
              UPDATE
            </Link>
          </button>

          <button
            className="delete-btn common-btn"
            onClick={() => removePost(post.id)}
          >
            DELETE
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ShowPost;
