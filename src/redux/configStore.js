// // import { configureStore } from '@reduxjs/toolkit';

// // export default configureStore({
// //   reducer: {
// //     devTools: process.env.NODE_ENV !== 'production',
// //   },
// // });

// import { createStore } from 'redux';
// import reducer from './reducer/reducer';

// let store = createStore(reducer);
// export default store;

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
