import { createAction,handleActions } from 'redux-actions';
import { produce } from "immer";

import {removeAccessToken} from '../../shared/Cookie'


/*Action*/
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';


/*Action Creator*/
const login = createAction(LOGIN,(userData)=>({userData}))
const logout = createAction(LOGOUT,()=>({}))


/*middleware Action*/
export const userLogin = (loginData) =>{
  return async function (dispatch,getState){
    console.log(loginData);
    dispatch(login(loginData));
  }
}

export const userLogout = () =>{
  return async function (dispatch,getState){
    dispatch(logout());
  }
}

let initialState = {
  id : '',
  nick : '',
};

export default handleActions(
  {
    [LOGIN] :(state,action) =>
      produce(state,(draft)=>{
        console.log(action.payload.userData);
        draft.id = action.payload.userData.user_id;
        draft.nick = action.payload.userData.name;
    }),
    [LOGOUT] :(state,action) =>
    produce(state,(draft)=>{
      console.log('logout!')
      draft.id = '';
      draft.nick = '';
      removeAccessToken();
    }),
  },initialState
)
