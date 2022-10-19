import React from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const TopNavbar = () => {
  const navigate = useNavigate();

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
          <button className="mr-4">
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
