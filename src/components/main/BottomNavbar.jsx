import React, { useState, useCallback } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import ContentUpload from '../../pages/ContentUpload';
import { useDispatch } from 'react-redux';

//하단 네비게이션 바

const BottomNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const uploadModal = useCallback(() => {
  //   dispatch({
  //     type: SET_ISMODAL,
  //   });
  // }, [dispatch]);
  return (
    <div className='z-10 bottom-0 w-screen fixed bg-white border-t-2'>
      <div className='h-12 flex justify-between mx-3 items-center'>
        <button onClick={() => navigate('/')}>
          <HomeIcon />
        </button>
        {/* <button onClick={() => navigate('/contentupload')}> */}
        {/* <button onClick={uploadModal}> */}
        <button>
          <AddBoxOutlinedIcon onClick={() => navigate('/contentupload')} />
        </button>
        <button onClick={() => navigate('/mypage')}>
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
        </button>
      </div>
    </div>
  );
};

export default BottomNavbar;
