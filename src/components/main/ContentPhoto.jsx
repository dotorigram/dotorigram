import React from "react";

const ContentPhoto = () => {
  return (
    <div>
      <img
        src={require("../../static/img/feed_img.jpg")}
        className="w-100 h-100 m-auto"
        alt="img"
      />
    </div>
  );
};

export default ContentPhoto;
