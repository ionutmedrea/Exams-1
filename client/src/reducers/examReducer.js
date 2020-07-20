import initialState from "./initialState";
import {EXAMS_FETCH_FAILURE, FETCH_EXAMS} from "../actions/types";


export default function (state = initialState.exams, action) {
    switch (action.type) {
        case FETCH_EXAMS:
            console.log("FETCH_EXAMS TEST: ",action.payload);
            return {
            ...state,
          exams: action.payload
        };
        case EXAMS_FETCH_FAILURE:
            console.log("EXAMS_FETCH_FAILURE TEST : ",action.payload);
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}
