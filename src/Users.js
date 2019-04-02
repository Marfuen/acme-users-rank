import React from "react";
import {deleteUser} from "./store";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserFromState: (id) => dispatch(deleteUser(id))
  }
}

const Users = ({users, deleteUserFromState, history}) => {
  console.log(history.push())
  return (
    <ul className='list-group'>
      {users.map(user =>
      <li key={user.id} className='list-group-item'>
        {user.name}
        <br />
        {user.bio}
        <br />
        {user.rank}
        <br />
        <button type="submit" className="btn btn-danger" onClick={() => deleteUserFromState(user.id, history)}>Delete</button>
      </li>
      )}
    </ul>
  )
}

export default connect(null, mapDispatchToProps)(Users);
