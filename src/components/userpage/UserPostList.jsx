import React from 'react';
import ContentPhoto from '../main/ContentPhoto';

const UserPostList = ({ post }) => {
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
      <ContentPhoto post={post} />
    </div>
  );
};

export default UserPostList;
