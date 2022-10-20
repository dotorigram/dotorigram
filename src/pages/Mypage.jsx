import React from 'react';
import BottomNavbar from '../components/main/BottomNavbar';
import TopNavbar from '../components/main/TopNavbar';
import PostList from '../components/mypage/PostList';
import Profile from '../components/mypage/Profile';

//내 계정

const Mypage = () => {
  return (
    <div>
      <TopNavbar />
      <div className='py-12'>
        <Profile />
        {/* <StoryContent/> */}
        <PostList />
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Mypage;
