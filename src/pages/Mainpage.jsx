import React,{useEffect} from 'react';
import TopNavbar from '../components/main/TopNavbar';
import FeedList from '../components/main/FeedList';
import BottomNavbar from '../components/main/BottomNavbar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getAccessToken} from '../shared/Cookie';

const Mainpage = ({ id }) => {
  const navigation = useNavigate()
  const userData = useSelector(state => state.user)
  useEffect(()=>{
    if(userData === ''){
      navigation('/login');
    }
  },[])
  console.log("쿠키 값 ::",getAccessToken());
  return (
    <div>
      <TopNavbar />
      <div className='py-12'>
        {/* <StoryList /> */}
        <FeedList id={id} />
        <FeedList id={id} />
        <FeedList id={id} />
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Mainpage;
