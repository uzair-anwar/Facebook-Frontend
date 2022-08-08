import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./Context/userContext";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Main from "./Components/Main";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/posts" element={<Main />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
