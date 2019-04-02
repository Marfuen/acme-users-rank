import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { fetchUsers } from "./store";
import { connect } from "react-redux";
import Users from "./Users";
import Navbar from "./Navbar";

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(fetchUsers())
  }
}

class App extends Component {
  componentDidMount(){
    this.props.getUsers()
  }
  render(){
    const { users } = this.props;
    const userCount = users.length
    return(
      <div>
        <h1>Acme Users With Ranks</h1>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <div>We have {userCount} Users!</div>}/>
          <Route path="/users" render={({history}) => <Users users={users} deleteUser={this.props.deleteUser} history={history}/>}/>
        </Switch>
      </div>
    )
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(App);
