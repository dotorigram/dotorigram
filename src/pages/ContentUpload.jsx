import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FileUpload from '../components/contents/FileUpload';
function ContentUpload() {
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
      {/* <img src={require('../static/img/feed_img.jpg')} className='w-100 h-100 m-auto mt-2 w-full' alt='img' /> */}
      <textarea className='outline-none w-full h-96 text-xl placeholder:text-base' placeholder='문구 입력...'></textarea>
    </div>
  );
}

export default ContentUpload;
