package team.nine.Exams.dtos;
import lombok.Builder;
import lombok.Value;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class ExamDto {
    private @Id
    @GeneratedValue Long id;
    private int academicYear;
    private String session;
    private int yearOfStudy;
    private String faculty;
    private String domain;
    private String course;
    private String teacher;
    private int numberOfSeats;
}
