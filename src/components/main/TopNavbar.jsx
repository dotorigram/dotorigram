import { useContext } from 'react';
import React from 'react';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AuthContext from '../../store/auth-context';
import { useNavigate } from 'react-router-dom';

const TopNavbar = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;
  const navigate = useNavigate();

  return (
    <div className='z-10 w-screen fixed bg-white border-b-2'>
      <div className='h-12 flex justify-between mx-3 items-center'>
        <div>
          <h1>
            <img src={require('../../static/img/dotorigram_logo.png')} alt='dotorigram' className='w-28 basis-1/6' onClick={() => navigate('/')} />
          </h1>
        </div>
        <button>
          <FavoriteBorderRoundedIcon className='text-2xl' />
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
