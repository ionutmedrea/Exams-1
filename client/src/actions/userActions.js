import {userTypes} from "./userTypes";
import axios from "axios";


function getFirstName(name) {
    return name.split(' ').slice(0,-1).join(' ');
}
function getLastName(name) {
    return name.split(' ').slice(-1).join(' ');
}

function getUsersUrl() {
    return "https://gorest.co.in/public-api/users";
}

function getUserUrl(name) {
    return "https://gorest.co.in/public-api/users?first_name="
        + getFirstName(name)
        + "&last_name="
        + getLastName(name);
}

export const fetchUsers = () => async dispatch => {
    // The token is hardcored for now
    try {
        const response = await axios.get(getUsersUrl(), {
            headers:{
                'authorization' : 'Bearer e5TMkzW24XHGg66CsXe_twDnguc_opxpBobr'
            }
        });
        return await dispatch({
            type:userTypes.FETCH_USERS,
            payload: response.data.result
        });
    } catch (e) {
        console.log(e);
    }
};

export const fetchUser = (name) => async dispatch => {
    try{
        const response = await axios.get(getUserUrl(name),{
            headers:{
                'authorization' : 'Bearer e5TMkzW24XHGg66CsXe_twDnguc_opxpBobr'
            }
        });
        return await dispatch({
           type: userTypes.FETCH_USER,
           payload: response.data.result[0]
        });
    }
    catch (e) {
        console.log(e);
    }
};


export const registerUser = (user) => async dispatch => {
    try{
        const response = await axios.post(getUsersUrl(),{
            headers:{
                'authorization' : 'Bearer e5TMkzW24XHGg66CsXe_twDnguc_opxpBobr'
            },
            body: JSON.stringify(user)
        });
        return await dispatch({
           type: userTypes.FETCH_USER,
           payload: response.data
        });
    }
    catch (e) {
        console.log(e);
    }
};


