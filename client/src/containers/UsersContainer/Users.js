import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../shared/Spinner";
import {fetchUsers} from "../../actions/userActions";
import UserCard from "../../components/users/UserCard";
import {UserListStyled} from "./UserList.styled";

function Exams() {

    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();

    // Use effect will only run once with component render
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div>
            <p>Search</p>
            <p>filter</p>
        <UserListStyled>
            {users ? users.map(user => <UserCard
                key={user.uid}
                id={user.uid}
                username={user.userName}
                password={user.password}
                email={user.email}
                role={user.role}/>) : <Spinner/>}
        </UserListStyled>
        </div>
    );
}

export default Exams;
