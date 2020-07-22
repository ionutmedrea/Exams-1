import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../shared/Spinner";
import {fetchUser, fetchUsers} from "../../actions/userActions";
import UserCard from "../../components/UserCard";
function Exams() {

     const users = useSelector(state => state.users.users);
     const user = useSelector(state => state.users.user);
     const dispatch = useDispatch();

    // Use effect will only run once with component render
    useEffect(() => {
        // return axios.get("https://gorest.co.in/public-api/users?access-token=UeAAVRHfpRIXJVrJheGhrj9zC63ZG7RzN7bJ")
        //     .then(response => console.log(response));
        dispatch(fetchUsers());
        dispatch(fetchUser("Diana Keeling"));
    }, []);

    return (
        <div>
            <p>Fetch Specific</p>
            {user ? <UserCard firstname={user.first_name} lastname={user.last_name} gender={user.gender}/> : <Spinner/>}
            <hr/><hr/><hr/>
            <p>Fetch All</p>
            {users ? users.map(user => <UserCard
                key={user.first_name}
                firstname={user.first_name}
                lastname={user.last_name}
                gender={user.gender}/>) : <Spinner/>}
        </div>
    );
}

export default Exams;
