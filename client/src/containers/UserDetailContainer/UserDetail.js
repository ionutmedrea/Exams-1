import React from "react";
import {useParams} from "react-router-dom"
import UserDetailCard from "../../components/users/UserDetailCard";


function UserDetail() {

    const {username} = useParams();


return(
    <div>
        <UserDetailCard username={username}/>
    </div>
);
}

export default UserDetail;
