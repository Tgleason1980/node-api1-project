import React, {useState, useEffect} from "react";
import axios from "axios";






const InitialUser = {
    name: "",
    bio: "",
    

}

const AddUser = (props, {errors, touched}) => {
    const [addUser, setAddUser] = useState(InitialUser)
    console.log(props)

    const handleChange = event => {
        setAddUser({...addUser, [event.target.name]: event.target.value});
    };


    const handleSubmit = event => {
        event.preventDefault();
        axios
            .post(`http://localhost:5000/api/users/`, addUser)
            .then(res => {
                console.log(res)
                setAddUser(InitialUser)
                props.history.push("/")
                })
            .catch(error => console.log(error))
    }
  
    

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit = {handleSubmit}>
                <input type = "text" name = "name" placeholder="Name" onChange = {handleChange} value ={addUser.name} />
                <input type = "text" name = "bio" placeholder="Bio" onChange = {handleChange} value ={addUser.bio}/>
                <button type="submit">Add User</button>


            </form>
        </div>
    )
}

export default AddUser;