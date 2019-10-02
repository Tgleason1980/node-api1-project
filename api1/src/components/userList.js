import React, { Component } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import UserCard from "./userCard"
import Users from "./users";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/users/")
      .then(res => {
        this.setState({ users: res.data })}
        )
      .catch(err => console.log(err.response));
  }

  addUser = event => {
    event.preventDefault();
    this.props.history.push("/add-user")
  }

  render() {


    //console.log(this.state.users)
    return (
      <div>
          <button onClick = {(this.addUser)}>Add User</button>
        {this.state.users.map(user => (
          <UserDetails key={user.id} user={user} />
        ))}
        
      </div>
    
    );
  }
}

function UserDetails({user }) {
  return (
    <Link to={`/users/${user.id}`}>
      <UserCard  user={user} />
    </Link>
  );
}