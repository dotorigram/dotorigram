import React from 'react';
import TopNavbar from '../components/main/TopNavbar';
import FeedList from '../components/main/FeedList';
import BottomNavbar from '../components/main/BottomNavbar';
const Mainpage = () => {
  return (
    <div className='w-100'>
      <TopNavbar />
      {/* <StoryList /> */}
      <FeedList />
      <BottomNavbar />
    </div>
  );
};

export default Mainpage;
