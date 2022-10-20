import { combineReducers, configureStore } from '@reduxjs/toolkit';
// modules
import postReducer from './reducer/modules/postReducer';
import userReducer from './reducer/modules/userReducer';

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
