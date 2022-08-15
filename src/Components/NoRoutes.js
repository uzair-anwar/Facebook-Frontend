import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../StyleSheets/posts-style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const notify = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
const NoRoutes = () => {
  const navigate = useNavigate();
  useEffect(() => {
    notify("There's nothing here: 404!");
  }, []);

  const back = () => {
    navigate("/posts");
  };

  return (
    <div className="back-btn">
      <button className="common-btn delete-btn" onClick={() => back()}>
        Back
      </button>
    </div>
  );
};

export default NoRoutes;
