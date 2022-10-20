import { Avatar } from '@mui/material';
import profile from '../../static/img/profile.jpg';
import React from 'react';

function CommentInput() {
  return (
    <div>
      <div className='bg-neutral-100 h-16 flex items-center'>
        <Avatar className='fixed top-1 left-5' src={profile} />
        <form className='commentWrap ml-10 flex justify-between'>
          <input className='w-80' type='text' placeholder='댓글달기...' />
          <button className='commetBtn text-blue-200 font-bold mr-5 bg-white h-10'>게시</button>
        </form>
      </div>
    </div>
  );
}

export default CommentInput;
