import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContentUpload from "./pages/ContentUpload";
import PostedContent from "./pages/PostedContent";
import Mypage from "./pages/Mypage";
import CommentsBox from "./pages/CommentsBox";
import PrivateRoute from "./route/PrivateRoute";
// 파이어베이서 파일에서 import 해온 db
import { db } from "./firebase/firebase";
// db에 접근해서 데이터를 꺼내게 도와줄 친구들
import { collection, getDocs } from "firebase/firestore";

function App() {
  // 이따가 users 추가하고 삭제하는거 진행을 도와줄 state
  const [users, setUsers] = useState([]);
  // db의 users 컬렉션을 가져옴
  const usersCollectionRef = collection(db, "users");
  const postsCollectionRef = collection(db, "posts");

  // 시작될때 한번만 실행
  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getUsers = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(postsCollectionRef);
      console.log(data);
      const post = [];

      data.docs.map((doc) => {
        post.push(doc.data());
      });
    };

    getUsers();
  }, []);
  const [authenticate, setAuthenticate] = useState(false); //true면 로그인 됨, false면 로그인 안됨
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route
        path="/login"
        element={<Login setAuthenticate={setAuthenticate} />}
      />
      <Route path="/register" element={<Register />} />
      <Route path="/contentupload" element={<ContentUpload />} />
      <Route path="/postedcontent" element={<PostedContent />} />
      <Route path="/commentsbox" element={<CommentsBox />} />
      <Route
        path="/mypage"
        element={<PrivateRoute authenticate={authenticate} />}
      />
    </Routes>
  );
}

export default App;
