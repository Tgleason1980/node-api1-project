import React from 'react';



const UserCard = props => {
  const  {name, bio}  = props.user;
 // console.log(props);
  return (
    <div >
      <h2>Name:  {name}</h2>
      <div >
        <h3>Bio: {bio}</h3>
      </div>
      
    </div>
  );
};

export default UserCard;