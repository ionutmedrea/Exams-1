import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../shared/Spinner";
import {fetchUsers} from "../../actions/userActions";
import UserCard from "../../components/UserCard";

function Exams() {

    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();

    // Use effect will only run once with component render
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div>
            <p>Fetch All</p>
            {users ? users.map(user => <UserCard
                key={user.uid}
                id={user.uid}
                username={user.username}
                password={user.password}
                email={user.email}
                role={user.role}/>) : <Spinner/>}
        </div>
    );
}

export default Exams;
