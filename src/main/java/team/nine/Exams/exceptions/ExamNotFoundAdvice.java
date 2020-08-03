package team.nine.Exams.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class ExamNotFoundAdvice extends Exception{
    @ResponseBody
    @ExceptionHandler(ExamNotFound.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String examNotFoundHandler(ExamNotFound ex){
        return ex.getMessage();
    }
}
