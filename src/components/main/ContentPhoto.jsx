import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContentPhoto = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div className='flex items-center'>
      <img src={post?.img} className='m-auto' alt='' onClick={() => navigate('/postedcontent')} />
      {/* <img src={require('../../static/img/feed_img.jpg')} className='w-100 h-100 m-auto' alt='' onClick={() => navigate('/postedcontent')} /> */}
    </div>
  );
};

export default ContentPhoto;
