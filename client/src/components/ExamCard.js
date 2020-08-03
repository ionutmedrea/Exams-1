import React from "react";
import "./styleExamCard.css";

function ExamCard({course, faculty, yearOfStudy, teacher}) {
    return(
        <div className="card">
            <ul>
                <li className="course">
                    Course:{course}
                </li>
                <li>
                    Faculty:{faculty}
                </li>
                <li>
                    Year of Study:{yearOfStudy}
                </li>
                <li>
                    Teacher:{teacher}
                </li>
            </ul>
        </div>
    );
}

export default ExamCard;
