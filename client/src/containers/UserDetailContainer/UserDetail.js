import React, {useEffect} from "react";
import {useParams} from "react-router-dom"
import UserDetailCard from "../../components/users/UserDetailCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../actions/userActions";
import Spinner from "../../shared/Spinner";


function UserDetail() {

    const {username} = useParams();

    const user = useSelector(state => state.users.user);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchUser(username));
    },[]);


return(
    <div>
        {user ? <UserDetailCard username={username} user={user}/> : <Spinner/>}
    </div>
);
}

export default UserDetail;
