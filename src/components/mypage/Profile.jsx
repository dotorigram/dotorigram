import React from 'react';
import ProfileInfo from './ProfileInfo';
import Avatar from '@mui/material/Avatar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useSelector } from 'react-redux';

//마이페이지 프로필 전체

const Profile = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <div className='max-w-470 mx-auto flex'>
      <div className='mx-4'>
        <div className='flex justify-between items-center'>
          <div>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' sx={{ width: 56, height: 56 }} />
          </div>
          <div className='mx-10'>
            <div className='text-2xl font-light mb-4'>{user.user}</div>
            <div className='flex gap-10'>
              <button className='border-2 rounded-md px-8 font-bold text-sm'>메시지 보내기</button>
              <button className='border-2 rounded-md px-2'>
                <PersonAddIcon />
              </button>
            </div>
          </div>
        </div>
        <ProfileInfo />
      </div>
    </div>
  );
};

export default Profile;
