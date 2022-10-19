//import { useContext } from 'react';
import React from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import LogoutIcon from "@mui/icons-material/Logout";
//import AuthContext from '../../store/auth-context';
import { useNavigate } from "react-router-dom";
import { auth} from '../../firebase/firebase';
import { userLogout } from '../../redux/reducer/user';
import {useDispatch} from 'react-redux'
const TopNavbar = () => {
  const dispatch = useDispatch()
  //const authCtx = useContext(AuthContext);

  //const isLoggedIn = authCtx.isLoggedIn;
  const navigate = useNavigate();

  // const logOut = () => {
  //   removeAccessToken('id'); // 쿠키를 삭제
  //   navigate('/login'); // 메인 페이지로 이동
  // };

  const onLogOutClick = () => {
    auth.signOut();
    dispatch(userLogout());
    navigate('/login');
  };

  return (
    <div className="z-10 w-screen fixed bg-white border-b-2">
      <div className="h-12 flex justify-between mx-3 items-center">
        <div>
          <h1>
            <img
              src={require("../../static/img/dotorigram_logo.png")}
              alt="dotorigram"
              className="w-28 basis-1/6"
              onClick={() => navigate("/")}
            />
          </h1>
        </div>
        <div>
          <button className="mr-4" onClick={onLogOutClick}>
            <LogoutIcon />
          </button>
          <button>
            <FavoriteBorderRoundedIcon className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
