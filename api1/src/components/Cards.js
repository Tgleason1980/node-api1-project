import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './card'

const Cards = ()=>{
    const [userList, setUserList] = useState([]);
    useEffect(()=>{
        axios
        .get('http://localhost:5000/users')
        .then(res=>{
            console.log(res);
            setUserList(res.data)
        })
        .catch(err=>{
            console.log(err.response)
        })
    },[])
    if (!userList){
        return(
            <div>No Users</div>
        )
    }else{
    return(
        <div>
        <h1>Users</h1>
         {userList.map((users, index) => <Card users={users} key={index}/> )}
        </div>
    );
}
}
export default Cards;