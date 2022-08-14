import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./Context/userContext";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Main from "./Pages/Main";
import EditPost from "./Components/EditPost";
import EditDraftPost from "./Components/EditDraft";
import ProtectedRoute from "./Routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path="posts" element={<Main />} />
            <Route path="/Post/:id/edit" element={<EditPost />} />
            <Route path="/Draft/:id/edit" element={<EditDraftPost />} />
          </Route>
          <Route path="*" element={<h2>There's nothing here: 404!</h2>} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
