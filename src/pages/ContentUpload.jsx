import React, { useCallback, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";

function ContentUpload() {
  // 미리보기
  const [imageSrc, setImageSrc] = useState("");
  const onImgInputBtnClick = (e) => {
    e.preventDefault();
    logoImgInput.current.click();
  };
  const logoImgInput = useRef();
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <div className="mx-auto max-w-470 relative">
      <div className="flex justify-center mt-2 border-b static">
        <div className="mb-2 font-bold static">새 게시물 만들기</div>
      </div>
      <div className="flex justify-center h-96 flex-col items-center gap-y-2 static">
        <img
          className="w-20 h-18"
          src={require("../static/img/addPost.PNG")}
          alt="img"
        />
        <h1 margin="20px" F_size="22px">
          버튼을 눌러 사진을 추가하세요
        </h1>

        <div className="static w-80 h-80">
          {imageSrc && <img src={imageSrc} alt="" />}
        </div>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => encodeFileToBase64(e.target.files[0])}
          ref={logoImgInput}
        />
        <button
          className="font-semibold text-white bg-blue-500 rounded w-32 h-8"
          onClick={onImgInputBtnClick}
        >
          컴퓨터에서 선택
        </button>
      </div>
      <textarea
        className="outline-none w-full h-96 text-xl placeholder:text-base"
        placeholder="문구 입력..."
      ></textarea>
    </div>
  );
}

export default ContentUpload;
