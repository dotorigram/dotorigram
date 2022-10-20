import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Login from './pages/Login';
import Register from './pages/Register';
import ContentUpload from './pages/ContentUpload';
import PostedContent from './pages/PostedContent';
import Mypage from './pages/Mypage';
import CommentsBox from './pages/CommentsBox';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const [authenticate, setAuthenticate] = useState(false); //true면 로그인 됨, false면 로그인 안됨
  return (
    <Routes>
      <Route path='/' element={<Mainpage />} />
      <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
      <Route path='/register' element={<Register />} />
      <Route path='/contentupload' element={<ContentUpload />} />
      <Route path='/postedcontent' element={<PostedContent />} />
      <Route path='/commentsbox' element={<CommentsBox />} />
      <Route path='/mypage' element={<PrivateRoute authenticate={authenticate} />} />
    </Routes>
  );
}

export default App;
