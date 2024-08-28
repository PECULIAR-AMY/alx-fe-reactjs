import React from 'react'

const UserProfile = (props) => {
    return (
        <div>
        <h2 style ={{color: "blue", margin:"solid,blue,10px", border: "5px", padding: "5px"}}>{props.name}</h2>
        <p style ={{color: "yellow", fontStyle:"Arial", textAlign: "center"}}>Age: {props.age}</p>
        <p>
          <span style={{ color: 'blue' }}>Bio: {props.bio}</span>
        </p>
      </div>
    );

}

export default UserProfile;