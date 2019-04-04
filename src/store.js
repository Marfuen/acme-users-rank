import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import axios from 'axios'

const initialState = {
  users: []
}

const GOT_ALL_USERS = 'GET_ALL_USERS';
const DELETED_USER = 'DELETED_USER';
const CREATED_USER = 'CREATED_USER';
const EDITED_USER = 'EDITED_USER';

const editedUser = (user, id) => {
  return {
    type: EDITED_USER,
    user,
    id,
  }
}

const createdUser = user => {
  return {
    type: CREATED_USER,
    user,
  }
}

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

export const editUser = (user, id) => {
  return dispatch => {
    return axios.put(`/api/users/${id}`, user)
                .then(response => response.data)
                .then(user => dispatch(editedUser(user)))
                .catch(e => console.log(e));
  }
}

export const createUser = (user) => {
  return dispatch => {
    return axios.post('/api/users', user)
                .then(response => response.data)
                .then(user => dispatch(createdUser(user)))
                .catch(e => console.log(e));
  }
}

export const deleteUser = (id) => {
  return dispatch => {
    return axios.delete(`/api/users/${id}`)
                .then(response => response.data)
                .then(user => dispatch(deletedUser(user)))
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
    case CREATED_USER:
      return {...state, users: [...state.users, action.user]}
    case EDITED_USER:
      return {...state, users: [...state.users.filter(user => user.id !== action.id), action.user]}
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk))




export default store;
