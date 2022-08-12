import Logout from "./Logout";

const Navbar = () => {
  return (
    <>
      <div className="main">
        <div className="name-div">
          <h1>Facebook</h1>
          <Logout />
        </div>
      </div>
    </>
  );
};

export default Navbar;
