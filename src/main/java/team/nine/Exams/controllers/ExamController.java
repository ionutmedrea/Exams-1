package team.nine.Exams.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import team.nine.Exams.exceptions.ExamNotFound;
import team.nine.Exams.models.Exam;
import team.nine.Exams.repositories.ExamRepository;

import java.util.List;

@RestController
public class ExamController {
    private final ExamRepository repository;

    @Autowired
    ExamController(ExamRepository repository){
        this.repository=repository;
    }

    //findAll method
    @GetMapping("/exam")
    List<Exam> getAll(){
        return repository.findAll();
    }

    //new exam method
    @PostMapping("/exam")
    Exam newExam(@RequestBody Exam newExam){
        return repository.save(newExam);
    }

    // test filter and exception using the id of an exam
    @GetMapping("/exam/{id}")
    Exam one(@PathVariable Long id) {

        return repository.findById(id)
                .orElseThrow(() -> new ExamNotFound(id));
    }

    //updating an exam using the id
    @PutMapping("/exam/{id}")
    Exam replaceExam(@RequestBody Exam newExam, @PathVariable Long id) {

        return repository.findById(id)
                .map(exam -> {
                    exam.setAcademicYear(newExam.getAcademicYear());
                    exam.setSession(newExam.getSession());
                    exam.setYearOfStudy(newExam.getYearOfStudy());
                    exam.setFaculty(newExam.getFaculty());
                    exam.setDomain(newExam.getDomain());
                    exam.setCourse(newExam.getCourse());
                    exam.setTeacher(newExam.getTeacher());
                    exam.setNumberOfSeats(newExam.getNumberOfSeats());
                    return repository.save(exam);
                })
                .orElseGet(() -> {
                    newExam.setId(id);
                    return repository.save(newExam);
                });
    }
    //removing an exam by id
    @DeleteMapping("/exam/{id}")
    void deleteExam(@PathVariable Long id) {
        repository.deleteById(id);
    }

}
