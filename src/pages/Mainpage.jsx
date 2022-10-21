import React, { useEffect } from "react";
import TopNavbar from "../components/main/TopNavbar";
import FeedList from "../components/main/FeedList";
import BottomNavbar from "../components/main/BottomNavbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../shared/Cookie";
// import {auth, db} from '../firebase/firebase';
// import {firebase} from 'firebase/auth';
import { getPost } from "../redux/reducer/modules/postReducer";

import { query, getDocs, orderBy, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const Mainpage = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  // 게시물정보 가져오기
  const { post } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  const userData = useSelector((state) => state.user);
  useEffect(() => {
    if (userData === "") {
      navigation("/login");
    }
  }, []);
  console.log("쿠키 값 ::", getAccessToken());

  return (
    <div>
      <TopNavbar />
      <div className="py-12">
        {/* <StoryList /> */}
        {post.map((post) => {
          return <FeedList key={post.id} post={post} />;
        })}
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Mainpage;
