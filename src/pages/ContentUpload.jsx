import React, { useCallback, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';

function ContentUpload() {
  // 미리보기
  const [imageSrc, setImageSrc] = useState('');
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
    <div className='mx-auto max-w-470'>
      <div className='flex justify-between mt-2'>
        <button>
          <CloseIcon className='ml-5' />
        </button>
        <span>새로운 사진 게시물</span>
        <button>
          <span className='text-blue-500 font-bold mr-5'>공유하기</span>
        </button>
      </div>

      <input type='file' accept='image/*' className='hidden' onChange={(e) => encodeFileToBase64(e.target.files[0])} ref={logoImgInput} />
      <button onClick={onImgInputBtnClick}>사진업로드</button>
      <div>{imageSrc && <img src={imageSrc} alt='' className='w-screen' />}</div>
      <textarea className='outline-none w-full h-96 text-xl placeholder:text-base' placeholder='문구 입력...'></textarea>
    </div>
  );
}

export default ContentUpload;
