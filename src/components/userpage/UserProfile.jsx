import React from 'react';
import UserProfileInfo from './UserProfileInfo';
import Avatar from '@mui/material/Avatar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

//마이페이지 프로필 전체

const UserProfile = ({ post }) => {
  const user = useSelector((state) => state.user);
  // const postId = post.
  const location = useLocation();
  // console.log(user);
  console.log(post);
  return (
    <div className='max-w-470 mx-auto flex'>
      <div className='mx-4'>
        <div className='flex justify-between items-center'>
          <div>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' sx={{ width: 56, height: 56 }} />
          </div>
          <div className='mx-10'>
            <div className='text-2xl font-light mb-4'>
              {/* {post.map((item) => {
                return item.user;
              })} */}
              {user.user}
            </div>
            <div className='flex gap-10'>
              <button className='border-2 rounded-md px-8 font-bold text-sm'>메시지 보내기</button>
              <button className='border-2 rounded-md px-2'>
                <PersonAddIcon />
              </button>
            </div>
          </div>
        </div>
        <UserProfileInfo />
      </div>
    </div>
  );
};

export default UserProfile;
