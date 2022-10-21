import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';

//가져오기 thunk
export const getPost = createAsyncThunk('post/getPost', async (_, thunkAPI) => {
  try {
    //const { data } = await axios.get("http://localhost:3001/post");
    const postsCollectionRef = collection(db, 'posts');

    // getDocs로 컬렉션안에 데이터 가져오기
    const data = await getDocs(postsCollectionRef);
    console.log(data);
    const post = [];

    data.docs.map((doc) => {
      post.push(doc.data());
    });

    return thunkAPI.fulfillWithValue(post);

    // 더미데이터 연결
    // const { data } = await axios.get('http://localhost:3001/post');
    // const posts = [];
    // // data.map((v) => {
    // //   posts.unshift(v);
    // // });
    // return thunkAPI.fulfillWithValue(data.reverse());
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

//추가하기 thunk
export const addPost = createAsyncThunk('post/addPost', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post('http://localhost:3001/post', payload);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  post: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    clearPost: (state, action) => {
      state.isSuccess = false;
    },
  },

  extraReducers: {
    // getPost : post 전체 목록을 가지고 옴
    [getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [getPost.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },

    // addPost : post를 db에 추가
    [addPost.pending]: (state) => {
      state.isSuccess = false;
      state.isLoading = true;
    },
    [addPost.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.post.unshift(action.payload);
    },
    [addPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { clearPost } = postSlice.actions;
export default postSlice.reducer;
