import React from 'react';
import ContentPhoto from './ContentPhoto';
import FeedContent from './FeedContent';
import Avatar from '@mui/material/Avatar';

const FeedList = ({ post }) => {
  return (
    <div className='border-2 rounded-lg mb-3 mx-auto max-w-470'>
      <div className='flex justify-around mx-3 my-2 items-center'>
        <h2 className='basis-1/8'>
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
        </h2>
        <div className='basis-1/2'>{post?.user}</div>
        <div className='flex justify-around basis-1/3'>
          <button className='basis-1/2'>수정</button>
          <button className='basis-1/2'>삭제</button>
        </div>
      </div>

      <ContentPhoto post={post} />

      <FeedContent post={post} />
    </div>
  );
};

export default FeedList;
