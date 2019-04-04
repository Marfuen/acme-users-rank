import React, { Component } from "react";
import store, {deleteUser} from "./store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserFromState: (id) => dispatch(deleteUser(id))
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}


class Users extends Component {
  componentDidMount(){
    this.props.getUsers();
  }
  render(){
    const { users, deleteUserFromState, history } = this.props;
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
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <button type="submit" className="btn btn-danger" onClick={() => {
                deleteUserFromState(user.id)
                  .then(() => history.push('/users'));
              }}>Delete</button>
            <Link to={`/users/${user.id}`}>Edit</Link>
          </div>
        </li>
        )}
      </ul>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
