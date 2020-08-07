import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchExams} from "../../actions/examActions";
import ExamCard from "../../components/exams/ExamCard";
import Spinner from "../../shared/Spinner";
import {ExamsWrapper, Wrapper} from "./exams.styled";
import {Link, useHistory} from "react-router-dom";


function Exams() {
    const exams = useSelector(state => state.exams.exams);
    const dispatch = useDispatch();
    const history = useHistory();



    useEffect(() => {
        dispatch(fetchExams());
    }, []);

    return (
        <Wrapper>
            <div>
                <p style={{padding: 0, margin: 0}}>Search</p>
                <p style={{padding: 0, margin: 0}}>Filter</p>
                <Link to={"/add"}>
                    <button>Add exam</button>
                </Link>
            </div>
            <ExamsWrapper>
                {exams ? exams.map(exam => <ExamCard key={exam.id}
                                                     id={exam.id}
                                                     faculty={exam.faculty}
                                                     yearOfStudy={exam.yearOfStudy}
                                                     teacher={exam.teacher}
                                                     course={exam.course}/>)
                    : <Spinner/>}
            </ExamsWrapper>
        </Wrapper>
    );
}

export default Exams;
