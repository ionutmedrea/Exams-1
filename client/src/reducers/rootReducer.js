import {combineReducers} from "redux";
import examReducer from "./examReducer";


const rootReducer = combineReducers({
    exams: examReducer
});



export default rootReducer;
