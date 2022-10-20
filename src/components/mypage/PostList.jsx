import React from 'react';
import ContentPhoto from '../main/ContentPhoto';

// 게시물 정보

const PostList = () => {
  return (
    <div className='max-w-470 mx-auto'>
      <div className='flex justify-around text-center'>
        <div>
          <div>게시물</div>
          <div className='font-bold'>0</div>
        </div>
        <div>
          <div>팔로워</div>
          <div className='font-bold'>0</div>
        </div>
        <div>
          <div>팔로우</div>
          <div className='font-bold'>0</div>
        </div>
      </div>
      <div className='border-2'>
        <div className='inline-grid grid-cols-3 gap-1 border-2'>
          <ContentPhoto />
        </div>
      </div>
    </div>
  );
};

export default PostList;
