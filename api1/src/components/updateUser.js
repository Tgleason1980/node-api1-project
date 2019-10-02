import React, {useState, useEffect} from "react";
import axios from "axios";


const InitialUser = {
    name: '',
    bio: '',
    
}

const UpdateUser = props => {
    const [update, setUpdate] = useState(InitialUser)

    useEffect(() => {
        if (props.match.params.id) setUpdate(props.user);
    },[props.user])

    const handleChange = event => {
        setUpdate({...update, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log("update", update)
        axios
            .put(`http://localhost:5000/api/users/${update.id}`, update)
            .then(res => {
                console.log(res)
                props.history.push("/")
                setUpdate(InitialUser)
                })
            .catch(error => console.log(error))
    }

    
    return (
        <div>
            <h2>Update User</h2>
            <form onSubmit = {handleSubmit}>
                <input type = "text" name = "name" placeholder="Name" onChange = {handleChange} value ={update.title} />
                <input type = "text" name = "bio" placeholder="Bio" onChange = {handleChange} value ={update.director}/>
                
                <button type="submit">Update</button>

            </form>
        </div>
    )
}

export default UpdateUser;