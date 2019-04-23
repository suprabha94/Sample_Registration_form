import * as types from './types';

export const fetchData = () => dispatch =>{
  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(json => console.log(json))

}

export const addUser = (newState) => dispatch => {
  dispatch({
    type: types.ADD_USER,
    newState: newState
  })
}
