import axios from "axios"

import {
    FETCH_EXAMS,
    EXAMS_FETCH_FAILURE
} from "./examTypes";

function getExamsUrl() {
    return "URL_TO_GET_API_ENDPOINT";
}

function examsFetchFailure(error) {
    return {
        type: EXAMS_FETCH_FAILURE,
        payload: error
    }
}

export const fetchExams = () => async dispatch => {
  try{
      const response = await axios.get(getExamsUrl());
      return await dispatch({
          type: FETCH_EXAMS,
          payload: response
      });
  }  
  catch (error) {
      dispatch(examsFetchFailure(error));
  }
};
