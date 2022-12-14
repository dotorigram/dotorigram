import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPost } from '../../redux/reducer/modules/postReducer';

// import { useSelector } from 'react-redux';
const ContentPhoto = ({ post }) => {
  // const { post } = useSelector((state) => state.post);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  if (location.pathname === '/') {
    // console.log(post);
    return (
      <div className='flex items-center'>
        <img src={post?.img} className='m-auto w-100 h-100' alt='' onClick={() => navigate('/postedcontent')} />
        {/* <img src={require('../../static/img/feed_img.jpg')} className='w-100 h-100 m-auto' alt='' onClick={() => navigate('/postedcontent')} /> */}
      </div>
    );
  } else if (location.pathname === '/mypage') {
    // console.log(post);
    return (
      <div className='grid grid-cols-3 gap-5'>
        {post.map((item, index) => {
          //   console.log(item);
          return (
            <div key={index}>
              <div
                style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                className='w-40 h-40'
                key={index}
                onClick={() => navigate('/postedcontent', { state: { id: post.user } })}
              ></div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default ContentPhoto;
