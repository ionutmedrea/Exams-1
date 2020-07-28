import {combineReducers} from "redux";
import examReducer from "./examReducer";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
    exams: examReducer,
    users: userReducer
});



export default rootReducer;
