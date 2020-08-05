import React, {useEffect} from "react";
import {useParams} from "react-router-dom"
import UserDetailCard from "../../components/users/UserDetailCard";
import {useDispatch, useSelector} from "react-redux";
import {startEditing, fetchUser, stopEditing} from "../../actions/userActions";
import Spinner from "../../shared/Spinner";
import UserDetailEdit from "../../components/users/UserDetailEdit";


function UserDetail() {

    const {username} = useParams();

    const user = useSelector(state => state.users.user);

    const editMode = useSelector(state => state.users.editMode);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchUser(username));
    },[]);


    function startEditingHandler() {
        dispatch(startEditing());
    }
    function stopEditingHandler() {
        dispatch(stopEditing());
    }

return(
    <div>
        {
            !editMode ?
                user ? <UserDetailCard username={username}
                                            user={user}
                                            editMode={editMode}
                                            startEdit={startEditingHandler}/> : <Spinner/>
            : user ? <UserDetailEdit username={username}
                          user={user}
                          editMode={editMode}
                          stopEdit={stopEditingHandler}/> : <Spinner/>
        }

    </div>
);
}

export default UserDetail;
