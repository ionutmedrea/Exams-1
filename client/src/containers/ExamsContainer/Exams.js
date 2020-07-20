import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchExams} from "../../actions/examActions";
import ExamCard from "../../components/ExamCard";
import Spinner from "../../shared/Spinner";

function Exams() {

    const exams = useSelector(state => state.exams.filteredExams);
    const dispatch = useDispatch();


    // Use effect will only run once with component render
    // useEffect(() => {
    //     dispatch(fetchExams());
    // },[]);

    // For now, if Exams exist, will display them, else will display a spinner
    return(
        <div>
            {/*{exams ? exams.map( exam => <ExamCard/>) : <Spinner/>}*/}
            <p>Exams Container</p>
        </div>
    );
}

export default Exams;
