import React from 'react';


const Card = props =>

{
    return (
    <div>
        <section>
             {console.log(props)} 
            <h2>Name: {props.userList.name}</h2>
            <h2>Bio: {props.userList.bio}</h2>
        </section> 
    </div>
    )
}

export default Card;