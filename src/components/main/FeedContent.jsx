import React from 'react';

import { AiOutlineHeart } from 'react-icons/ai';
import { TbMessageCircle2 } from 'react-icons/tb';
const FeedContent = () => {
  return (
    <div className='mx-3'>
      <div>
        <button>
          <AiOutlineHeart className='text-xl' />
        </button>
        <button>
          <TbMessageCircle2 className='text-xl' />
        </button>
      </div>
      <div>좋아요 갯수</div>
      <div className='flex gap-10'>
        <div>아이디</div>
        <div>내용~~~~</div>
      </div>
    </div>
  );
};

export default FeedContent;
