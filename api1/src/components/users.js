import React from "react";
import axios from "axios";
import UserCard from "./userCard";


export default class Users extends React.Component {
    constructor(props) {
      super(props);
      
      console.log(props)
    }
   
    
    componentDidMount() {
      this.fetchUser(this.props.match.params.id);
    }
  
    componentWillReceiveProps(newProps) {
      if (this.props.match.params.id !== newProps.match.params.id) {
        this.fetchUser(newProps.match.params.id);
      }
    }
  
    
    fetchUser = id => {
      
      axios
        .get(`http://localhost:5000/api/users/${this.props.match.params.id}`)
        .then(res => {
          //console.log(res.data.id) 
          this.props.setMovie(res.data)

        })
        .catch(err => console.log(err.response));
    }
  
    deleteUser = event => {
      event.preventDefault();
      axios
        .delete(`http://localhost:5000/api/users/${this.props.match.params.id}`)
        .then(res => {
          console.log(res.data.id)
          this.props.history.push("/")
          })
        .catch(error => console.log(error))
    }
  
    saveUser = () => {
      const addToSavedList = this.props.addToSavedList;
      addToSavedList(this.props.user);
    };
    
  
    render() {
  
      console.log(this.props)
      if (!this.props.user) {
        return <div>Loading User information...</div>;
      }
  
      return (
        <div className="wrapper">
             <UserCard user={this.props.user} /> 
        
         <button onClick={this.saveUser}>
          Save
        </button>
      <button onClick ={() => this.props.history.push(`/update-user/${this.props.user.id}`)}>Edit</button>
      <button onClick = {this.deleteUser}>Delete</button>
        </div>
      );
    }
  }