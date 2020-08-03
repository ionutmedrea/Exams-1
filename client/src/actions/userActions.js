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
        const response = await axios.post(getUsersUrl(), {
            headers: {
                'authorization': 'Bearer e5TMkzW24XHGg66CsXe_twDnguc_opxpBobr'
            },
            body: JSON.stringify(user)
        });
        return await dispatch({
            type: userTypes.FETCH_USER,
            payload: response.data
        });
    } catch (e) {
        console.log(e);
    }
};


