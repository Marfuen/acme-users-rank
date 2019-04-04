import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createUser, editUser } from "./store";
import { Link } from "react-router-dom";

const mapDispatchToProps = (dispatch) => {
  return {
    create: (user) => dispatch(createUser(user)),
    edit: (user, id) => dispatch(editUser(user, id)),
  }
}

class UserForm extends Component {
  constructor(props){
    super(props);
    const { user } = this.props;
    this.state = {
      name: user ? user.name : '',
      bio:  user ? user.bio : '',
      rank: user ? user.rank : 0,
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange({target}){
    this.setState({
      [target.name]: target.value
    })
  }
  onSubmit(ev){
    ev.preventDefault();
    if(this.props.user){
      this.props.edit(this.state, this.props.id)
          .then(() => this.props.history.push('/users'))
          .catch(e => console.log(e));
    }
    if(!this.props.user) {
      this.props.create(this.state)
          .then(() => this.props.history.push('/users'))
          .catch(e => console.log(e));
    }
  }
  componentDidUpdate(previousProps){
    if(this.props.id && !previousProps.user && this.props.user){
      this.setState({
        name: this.props.user ? this.props.user.name : '',
        bio:  this.props.user ? this.props.user.bio : '',
        rank: this.props.user ? this.props.user.rank : 0,
      })
    }
  }
  render(){
    return(
      <form style={{marginTop: '10px'}} onSubmit={this.onSubmit}>
        <input placeholder="name" className="form-control" name="name" value={this.state.name} onChange={this.onChange}/>
        <input placeholder="bio" className="form-control" name="bio" value={this.state.bio} onChange={this.onChange}/>
        <input placeholder="rank" className="form-control" name="rank" value={this.state.rank} onChange={this.onChange}/>
        <div className="btn-group" style={{marginTop: '10px'}}>
          <button type="submit" className='btn btn-primary' onClick={this.onSubmit}>{this.props.user ? 'Edit' : 'Create'}</button>
          <Link to="/users">
            <button type="submit" className="btn btn-info">Cancel</button>
          </Link>
        </div>
      </form>
    )
  }
}

export const CreateUser = connect(null,mapDispatchToProps)(UserForm);
