import React, { useState } from "react";
import {Route} from "react-router-dom"
import AddUser from "./components/addUser.js";
import Users from "./components/users.js";
import UserList from "./components/userList.js";
import UpdateUser from "./components/updateUser.js";


const App = (props) => {
  const InitialState = {
    name: "",
    bio: "",
    

}
  const [savedList, setSavedList] = useState([]);
  const [user, setUser] = useState([InitialState]);
  
  console.log(user)
  const addToSavedList = user => {
    setSavedList([...savedList, user]);
  };

  
  return (
    <>
      <Route
        path="/update-user/:id"
        render={props => {
          return <UpdateUser {...props} updateUser = {setUser} user = {user}/>;
        }}
      />

      <Route exact path="/" component={UserList} />
      <Route
         path="/users/:id"
        render={props => {
          return <Users {...props} addToSavedList={addToSavedList}  user = {user} setUser ={setUser}/>;
        }}
      />
      
       <Route
        path="/add-user"
        component = {AddUser}
      />  
    </>  
  );
};

export default App;