import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPost } from "../../redux/reducer/modules/postReducer";
import { Grid } from "@mui/material";
import { getStorage, ref } from "firebase/storage";

const storage = getStorage();

// Points to the root reference
const storageRef = ref(storage);

// Points to 'images'
const imagesRef = ref(storageRef, "images");

// Points to 'images/space.jpg'
// Note that you can use variables to create child values
const fileName = "space.jpg";
const spaceRef = ref(imagesRef, fileName);

// File path is 'images/space.jpg'
const path = spaceRef.fullPath;

// File name is 'space.jpg'
const name = spaceRef.name;

// Points to 'images'
const imagesRefAgain = spaceRef.parent;

// import { useSelector } from 'react-redux';
const ContentPhoto = ({ post }) => {
  // const { post } = useSelector((state) => state.post);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  if (location.pathname === "/") {
    // console.log(post);
    return (
      <div className="flex items-center">
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/dotorigram-49dcf.appspot.com/o/Images%2F" +
            "mix909AsJirOOLN_sunsplash.jpg" +
            "1666682889109" +
            "?alt=media"
          }
          className="m-auto w-100 h-100"
          alt=""
          onClick={() => navigate("/postedcontent")}
        />
        {/* <img src={require('../../static/img/feed_img.jpg')} className='w-100 h-100 m-auto' alt='' onClick={() => navigate('/postedcontent')} /> */}
      </div>
    );
  } else if (location.pathname === "/mypage") {
    console.log(post);
    return (
      <div className="grid grid-cols-3 gap-5">
        {post.map((item, index) => {
          //   console.log(item);
          return (
            <div key={index}>
              <div
                style={{
                  backgroundImage: `url({item.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-40 h-40"
                key={index}
                onClick={() => navigate("/postedcontent")}
              ></div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default ContentPhoto;
