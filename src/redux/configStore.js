import { createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import user from './reducer/user'

const middle = [thunk];
const root = combineReducers({
    user,
})
const enhancer = applyMiddleware(...middle);
let store = createStore(root,enhancer);
export default store;
