import Login from "../components/Login";
import React from "react";
import {ContainerWrapper} from "../components/Auth.styled";
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../actions/userActions";

export default function LoginContainer() {


    const history = useHistory();
    const dispatch = useDispatch();

    let editedUser = useSelector(state => state.users.editedUser);

    function handleSubmit(event) {
        event.preventDefault();

        if (editedUser.userName && editedUser.password) {
            dispatch(loginUser(editedUser.userName, editedUser.password));
            history.push("/home");
        }
    }

    function handleChange(event) {
        const {name, value} = event.target;
        editedUser = {
            ...editedUser,
            [name]: value
        };
    }


    return (
        <ContainerWrapper>
            <Login handleChange={handleChange} handleSubmit={handleSubmit} editedUser={editedUser}/>
        </ContainerWrapper>
    );
}
