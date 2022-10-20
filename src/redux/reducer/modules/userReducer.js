import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  user: '',
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserId: (state, action) => {
      state.user = action.payload;
    },
  },
});

// 액션 크리에이터는 컴포넌트에서 사용하기 위해 export
export const { getUserId } = userReducer.actions;
// reducer는 store에 등록하기위해 export
export default userReducer.reducer;
