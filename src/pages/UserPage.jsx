import React from 'react';
import BottomNavbar from '../components/main/BottomNavbar';
import TopNavbar from '../components/main/TopNavbar';
import UserPostList from '../components/userpage/UserPostList';
import UserProfile from '../components/userpage/UserProfile';
import { useSelector } from 'react-redux';

const UserPage = () => {
  const { post } = useSelector((state) => state.post);

  return (
    <div>
      <TopNavbar />
      <div className='py-14'>
        <UserProfile post={post} />
        {/* <StoryContent/> */}
        <UserPostList post={post} />
      </div>
      <BottomNavbar />
    </div>
  );
};

export default UserPage;
