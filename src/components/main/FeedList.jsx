import React from 'react';
import ContentPhoto from './ContentPhoto';
import FeedContent from './FeedContent';
const FeedList = () => {
  return (
    <div>
      <div className='flex justify-around  mx-3'>
        <h2 className='basis-1/8'>아이콘</h2>
        <div className='basis-1/2'>닉네임</div>
        <div className='flex justify-around basis-1/3'>
          <button className='basis-1/2'>수정</button>
          <button className='basis-1/2'>삭제</button>
        </div>
      </div>
      <ContentPhoto />
      <FeedContent />
    </div>
  );
};

export default FeedList;
