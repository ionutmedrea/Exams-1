import React from "react";
import {ExamDetailWrapper} from "./exam.styled";

function ExamDetailCard({exam,startEdit}) {
    return(
        <ExamDetailWrapper>
            <div style={{margin:"15%", postition: "relative", backgroundColor: "white"}}>
            <button onClick={startEdit}>Edit</button>
            <p>What the fufu id: {exam.id}</p>
            <p>What the course : {exam.course}</p>
            <p>What the teacher : {exam.teacher}</p>
            <p>What the session : {exam.session}</p>
            <p>What the yearOfStudy : {exam.yearOfStudy}</p>
            <p>What the faculty : {exam.faculty}</p>
            <p>What the domain : {exam.domain}</p>
            </div>
        </ExamDetailWrapper>
    );
}
export default ExamDetailCard;
