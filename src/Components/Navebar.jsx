import Logout from "./Account/Logout";

const Navbar = ({ setActive }) => {
  return (
    <>
      <div className="main">
        <div className="name-div">
          <h1>Facebook</h1>

          <div className="buttons">
            <button
              className="draft"
              type="submit"
              onClick={() => setActive("Posts")}
            >
              Posts
            </button>
          </div>

          <div>
            <button
              className="draft"
              type="submit"
              onClick={() => setActive("Draft")}
            >
              Draft
            </button>
          </div>

          <Logout />
        </div>
      </div>
    </>
  );
};

export default Navbar;
