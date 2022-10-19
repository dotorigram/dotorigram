import { createAction,handleActions } from 'redux-actions';
import { produce } from "immer";

/*Action*/
const LOGIN = 'LOGIN';


/*Action Creator*/
const login = createAction(LOGIN,(userData)=>({userData}))


/*middleware Action*/
export const userLogin = (loginData) =>{
  return async function (dispatch,getState){
    console.log(loginData);
    dispatch(login(loginData));
  }
}


let initialState = {
};

export default handleActions(
  {
    [LOGIN] :(state,action) =>
      produce(state,(draft)=>{
        console.log(action.payload.userData);
        draft.id = action.payload.userData.user_id;
        draft.nick = action.payload.userData.name;
      })
  },initialState
)
