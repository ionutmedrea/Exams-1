import React from "react";

function UserCard({username,password,email,id,role}) {
    return(
        <div style={{margin:"5%",padding:"2%",backgroundColor:"rgba(0,0,0,0.1)"}}>
            <p>id:{id}</p>
            <p>username:{username}</p>
            <p>password:{password}</p>
            <p>email:{email}</p>
            <p>role:{role}</p>
        </div>
    );
}

export default UserCard;
