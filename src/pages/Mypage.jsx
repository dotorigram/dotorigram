import React from 'react';
import BottomNavbar from '../components/main/BottomNavbar';
import TopNavbar from '../components/main/TopNavbar';
import PostList from '../components/mypage/PostList';
import Profile from '../components/mypage/Profile';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import UserPage from './UserPage';

//내 계정

const Mypage = () => {
  const { post } = useSelector((state) => state.post);
  const location = useLocation();
  return (
    <div>
      {location === '/mypage' ? (
        <div>
          <TopNavbar />
          <div className='py-14'>
            <Profile />
            {/* <StoryContent/> */}
            <PostList post={post} />
          </div>
          <BottomNavbar />
        </div>
      ) : (
        <UserPage />
      )}
    </div>
  );
};

export default Mypage;
