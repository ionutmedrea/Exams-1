import initialState from "./initialState";
import {userTypes} from "../actions/userTypes";


export default function (state = initialState, action) {
    switch (action.type) {
        case userTypes.FETCH_USERS:
            console.log("FETCH_USERS TEST: ", action.payload);
            return {
                ...state,
                users: action.payload
            };
        case userTypes.FETCH_USER:
            console.log("FETCH USER TEST: ", action.payload);
            return {
                ...state,
                user: action.payload,
                editedUser: action.payload
            };
        case userTypes.REGISTER:
            console.log("REGISTER USER TEST: ", action.payload);
            return {
                ...state,
            };
        case userTypes.LOGIN:
            console.log("LOGIN USER TEST: ", action.payload);
            return {
                ...state,
            };
        case userTypes.UPDATE_USER:
            console.log("UPDATE USER TEST: ", action.payload);
            return {
                ...state,
            };
        case userTypes.EDITING_ON:
            console.log("EDITING ON: ",action.payload);
            return {
                ...state,
              editMode: action.payload
            };
        case userTypes.EDITING_OFF:
            console.log("EDITING OFF: ",action.payload);
            return {
                ...state,
              editMode: action.payload
            };

        default:
            return state;
    }
}
