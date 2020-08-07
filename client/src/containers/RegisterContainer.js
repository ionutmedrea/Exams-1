import {ContainerWrapper} from "../components/Auth.styled";
import React, {useState} from "react";
import Register from "../components/Register";
import {useDispatch} from "react-redux";
import {registerUser} from "../actions/userActions";

export default function RegisterContainer() {
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        email: "",
        password: "",
        userName: "",
    });

    function handleSubmit(event) {
        event.preventDefault();

        if (user.userName && user.email && user.password) {
            dispatch(registerUser(user));
        }
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setUser(user => ({
                ...user,
                [name]: value
            })
        );
    }
    return(
        <ContainerWrapper>
            <Register handleChange={handleChange} handleSubmit={handleSubmit} user={user}/>
        </ContainerWrapper>
    );
}
