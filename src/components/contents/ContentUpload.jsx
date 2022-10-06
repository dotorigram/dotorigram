import React from "react";
import CloseIcon from "@material-ui/icons/Close";

function ContentUpload() {
  return (
    <div>
      <div className="flex justify-between mt-2">
        <CloseIcon className="ml-5" />
        <span>새로운 사진 게시물</span>
        <span className="text-blue-500 font-bold mr-5">공유하기</span>
      </div>
      <img
        src={require("../../static/img/feed_img.jpg")}
        className="w-100 h-100 m-auto mt-2 w-full"
        alt="img"
      />
      <textarea
        className="border-none w-full h-96"
        placeholder="문구 입력..."
      ></textarea>
    </div>
  );
}

export default ContentUpload;
