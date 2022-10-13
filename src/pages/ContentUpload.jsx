import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function ContentUpload() {
  const [myImage, setMyImage] = useState([]);
  const addImage = (e) => {
    const nowSelectimageList = e.target.files;
    const nowImageURLList = [...myImage];
    for (let i = 0; i < nowSelectimageList.length; i += 1) {
      const nowImageUrl = URL.createObjectURL(nowSelectimageList[i]);
      nowImageURLList.push(nowImageUrl);
    }
    setMyImage(nowImageURLList);
  };

  return (
    <div className="mx-auto max-w-470">
      <div className="flex justify-between mt-2">
        <button>
          <CloseIcon className="ml-5" />
        </button>
        <span>새 게시물 만들기</span>
        <button>
          <span className="text-blue-500 font-bold mr-5">공유하기</span>
        </button>
      </div>
      {/* <img
        src={require("../static/img/feed_img.jpg")}
        className="w-100 h-100 m-auto mt-2 w-full"
        alt="img"
      /> */}
      <div className="flex justify-center h-96">
        <label htmlFor="inputFile" onChange={addImage}>
          사진 선택
          <input
            type="file"
            multiple="multiple"
            id="inputFile"
            style={{ display: "none" }}
          />
        </label>
      </div>
      {/* <textarea
        className="outline-none w-full h-96 text-xl placeholder:text-base"
        placeholder="문구 입력..."
      ></textarea> */}
    </div>
  );
}

export default ContentUpload;
