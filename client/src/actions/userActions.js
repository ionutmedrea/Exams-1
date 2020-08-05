import {userTypes} from "./userTypes";
import axios from "axios";


function getFirstName(name) {
    return name.split(' ').slice(0, -1).join(' ');
}

function getLastName(name) {
    return name.split(' ').slice(-1).join(' ');
}

function getUsersUrl() {
    return "http://localhost:8080/api/users";
}

function getRegisterUrl() {
    return "http://localhost:8080/api/users/register"
}

function getLoginrUrl() {
    return "http://localhost:8080/api/users/login"
}

function getUserUrl(name) {
    return `http://localhost:8080/api/users/${name}`
}

export const fetchUsers = () => async dispatch => {
    // The token is hardcored for now
    try {
        const response = await axios.get(getUsersUrl());
        console.log(response);
        return await dispatch({
            type: userTypes.FETCH_USERS,
            payload: response.data
        });
    } catch (e) {
        console.log(e);
    }
};

export const fetchUser = (name) => async dispatch => {
    try {
        const response = await axios.get(getUserUrl(name));
        console.log(response);
        return await dispatch({
            type: userTypes.FETCH_USER,
            payload: response.data
        });
    } catch (e) {
        console.log(e);
    }
};


// export const filterUser = (users, filterType, filterItem) => dispatch => {
//
//     let filteredUsers = [];
//     switch (filterType) {
//         case "username" :
//             filterItem === "" ? filteredUsers = users : filteredUsers = users.filter(user => user.userName.toLowerCase().includes(filterItem).toLowerCase());
//         case "role" :
//             filterItem === "" ? filteredUsers = users : filteredUsers = users.filter(user => user.role.toLowerCase().includes(filterItem).toLowerCase());
//         case "email" :
//             filterItem === "" ? filteredUsers = users : filteredUsers = users.filter(user => user.email.toLowerCase().includes(filterItem).toLowerCase());
//         case "uid" :
//             filterItem === "" ? filteredUsers = users : filteredUsers = users.filter(user => user.uid.toLowerCase().includes(filterItem).toLowerCase());
//         default:
//             filteredUsers = users;
//     }
//
//     return dispatch({
//         type: userTypes.FILTER_USERS,
//         payload: filteredUsers
//     })
//
// };


export const registerUser = (user) => async dispatch => {
    try {
        console.log("before post", user);
        const response = await axios.post(getRegisterUrl(), user);
        console.log("Response", response);
        return await dispatch({
            type: userTypes.REGISTER,
            payload: response
        });
    } catch (e) {
        console.log(e.response);
    }
};

export const loginUser = (user) => async dispatch => {
    try {
        console.log("before post", user);
        const response = await axios.post(getLoginrUrl(), user);
        console.log("Response", response);
        return await dispatch({
            type: userTypes.LOGIN,
            payload: response
        });
    } catch (e) {
        console.log(e.response);
    }
};


export const startEditing = () => dispatch =>{
    return dispatch({
        type: userTypes.EDITING_ON,
        payload: true});
};

export const stopEditing = () => dispatch =>{
    return dispatch({
        type: userTypes.EDITING_OFF,
        payload: false});
};



export const updateUser = (user) => async dispatch => {
    try {
        console.log("before post", user);
        const urlToPUT = getUsersUrl() + `/${user.uid}`;
        const response = await axios.put(urlToPUT, user);
        console.log("Response", response);
        return await dispatch({
            type: userTypes.UPDATE_USER,
            payload: response
        });
    } catch (e) {
        console.log(e.response);
    }
};


