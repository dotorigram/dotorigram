import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const TopNavbar = () => {
  return (
    <div className='flex justify-between  mx-3'>
      <div>
        <h1>
          <img src={require('../../static/img/dotorigram_logo.png')} alt='dotorigram' className='w-28 basis-1/6' />
        </h1>
      </div>
      <button>
        <AiOutlineHeart className='text-2xl' />
      </button>
    </div>
  );
};

export default TopNavbar;
