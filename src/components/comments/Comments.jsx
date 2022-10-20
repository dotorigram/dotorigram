import React from 'react';
import { Avatar } from '@mui/material';
import bekind from '../../static/img/bekind.png';
import { AiOutlineHeart } from 'react-icons/ai';

function Comments() {
  return (
    <div className='flex items-center mx-1'>
      <Avatar className='fixed top-3 left-5' src={bekind} />
      <div className='my-2 ml-10 flex items-center'>
        <div className='font-bold mr-2 '>rabbitlover</div>
        <div className=''>귀여움이 세상을 지배한다..</div>
        <p className='absolute mt-14'>2분</p>
        <p className='absolute mt-14 ml-10'>답글 달기</p>
        <button className='ml-20 mt-2'>
          <AiOutlineHeart className='text-sm' />
        </button>
      </div>
    </div>
  );
}

export default Comments;
