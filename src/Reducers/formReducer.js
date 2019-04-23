import * as types from '../Actions/types';

export default function(state, action){
  switch(action.type){
    case types.FETCH_USER:
      return state;
    case types.ADD_USER:
      return action.newState;
    default:
      return state;
  }
}
