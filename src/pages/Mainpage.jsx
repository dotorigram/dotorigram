import React,{useEffect} from 'react';
import TopNavbar from '../components/main/TopNavbar';
import FeedList from '../components/main/FeedList';
import BottomNavbar from '../components/main/BottomNavbar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getAccessToken} from '../shared/Cookie';
import {auth, db} from '../firebase/firebase';
import {firebase} from 'firebase/auth';

const Mainpage = ({ id }) => {
  const navigation = useNavigate()
  const userData = useSelector(state => state.user)
  useEffect(()=>{
    if(userData === ''){
      if(getAccessToken()){
        
      }else{
        navigation('/login');
      }
    }
  },[])
  console.log(userData);
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
