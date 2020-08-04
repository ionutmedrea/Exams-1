import initialState from "./initialState";
import {userTypes} from "../actions/userTypes";


export default function (state = initialState.exams, action) {
    switch (action.type) {
        case userTypes.FETCH_USERS:
            console.log("FETCH_USERS TEST: ",action.payload);
            return {
                ...state,
                users: action.payload
            };
            case userTypes.FETCH_USER:
            console.log("FETCH USER TEST: ",action.payload);
            return {
                ...state,
                user: action.payload
            };
        case userTypes.REGISTER:
            console.log("REGISTER USER TEST: ",action.payload);
            return{
                ...state,
            };
            case userTypes.LOGIN:
            console.log("LOGIN USER TEST: ",action.payload);
            return{
                ...state,
            };

        default:
            return state;
    }
}
