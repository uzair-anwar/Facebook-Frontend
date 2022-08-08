import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const signUpToaster = () => {
  return toast("Account Successfully created", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
module.exports = signUpToaster;
