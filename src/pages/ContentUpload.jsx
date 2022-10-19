import React, { useCallback, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

function ContentUpload() {
  const navigate = useNavigate();
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
    <div className="mx-auto max-w-470">
      <div className="flex justify-between mt-2 border-b bg-white">
        <button onClick={() => navigate("/")}>
          <KeyboardBackspaceIcon className="mb-2" />
        </button>
        <div className="mb-2 font-bold z-10">새 게시물 만들기</div>
        <button className="text-blue-500 font-bold mr-2 mb-2">공유하기</button>
      </div>
      <div className="flex justify-center flex-col items-center gap-y-2">
        <div className="flex justify-center">
          {imageSrc ? (
            <div className="flex justify-center flex-col items-center">
              <img
                className="h-96 mb-2 overflow-hidden"
                src={imageSrc}
                alt=""
              />
              <button
                className="font-semibold text-white bg-blue-500 rounded w-32 h-8"
                onClick={onImgInputBtnClick}
              >
                다른 사진 업로드
              </button>
            </div>
          ) : (
            <div className="flex justify-center flex-col items-center p-20 ">
              <img src={require("../static/img/addPost.PNG")} alt="img" />
              <h1 margin="20px" F_size="22px">
                버튼을 눌러 사진을 추가하세요
              </h1>
              <button
                className="font-semibold text-white bg-blue-500 rounded w-32 h-8"
                onClick={onImgInputBtnClick}
              >
                컴퓨터에서 선택
              </button>
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => encodeFileToBase64(e.target.files[0])}
          ref={logoImgInput}
        />
      </div>
      <textarea
        className="w-full h-40 text-xl placeholder:text-base"
        placeholder="문구 입력..."
      ></textarea>
    </div>
  );
}

export default ContentUpload;
