import React from 'react';
import BottomNavbar from '../components/main/BottomNavbar';
import TopNavbar from '../components/main/TopNavbar';
import PostList from '../components/mypage/PostList';
import Profile from '../components/mypage/Profile';
import { useSelector } from 'react-redux';

//내 계정

const Mypage = () => {
  const { post } = useSelector((state) => state.post);
  return (
    <div>
      <TopNavbar />
      <div className='py-12'>
        <Profile />
        {/* <StoryContent/> */}
        <PostList post={post} />
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Mypage;
