import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import axios from 'axios'

const initialState = {
  users: []
}

const GOT_ALL_USERS = 'GET_ALL_USERS';
const DELETED_USER = 'DELETED_USER';

const gotAllUsers = users => {
  return {
    type: GOT_ALL_USERS,
    users,
  }
}

const deletedUser = user => {
  return {
    type: DELETED_USER,
    user,
  }
}

export const deleteUser = (id, history) => {
  return dispatch => {
    return axios.delete(`/api/users/${id}`)
         .then(response => response.data)
         .then(user => dispatch(deletedUser(user)))
         .then(history.push('/users'))
         .catch(e => console.log(e));
  }
}

export const fetchUsers = () => {
  return dispatch => {
    return axios.get('/api/users')
         .then(response => response.data)
         .then(users => dispatch(gotAllUsers(users)))
         .catch(e => console.log(e));
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GOT_ALL_USERS:
      return {...state, users: action.users}
    case DELETED_USER:
      return {...state, users: [...state.users.filter(user => user.id !== action.user.id)]}
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk))




export default store;
