import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import ContentUpload from "./components/contents/ContentUpload";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/detail/:id" element={} />
        <Route path="/addpost" element={} />
        <Route path="/mypage" element={} /> */}
      <Route path="/" element={<Mainpage />} />
      <Route path="/contentupload" element={<ContentUpload />} />
    </Routes>
  );
}

export default App;
