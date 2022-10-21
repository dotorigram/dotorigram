import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { getPost } from '../../redux/reducer/modules/postReducer';

const FeedPhoto = () => {
  const { post } = useSelector((state) => state.post);
  const user = useSelector((state) => state.user);
  console.log(post[0], user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  return (
    <div>
      {/* <div className='grid grid-cols-3 gap-4 w-20 h-20 overflow-hidden'>
        {post.map((item, index) => {
          return <img src={item.img} alt='' className='absolute w-18 h-18' />;
        })}
      </div> */}
      <Grid container spacing={2}>
        {post.map((item, index) => {
          //   console.log(item);
          return (
            <Grid item md={4} key={index}>
              <div style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='w-20 h-20' key={index}></div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default FeedPhoto;
