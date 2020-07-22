import React from "react";

function UserCard({firstname,lastname,gender}) {
    return(
        <div style={{margin:"5%",padding:"2%",backgroundColor:"rgba(0,0,0,0.1)"}}>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Gender: {gender}</p>
        </div>
    );
}

export default UserCard;
