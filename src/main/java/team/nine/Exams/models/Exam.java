package team.nine.Exams.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Exam {
    private @Id @GeneratedValue Long id;
    private int academicYear;
    private String session;
    private int yearOfStudy;
    private String faculty;
    private String domain;
    private String course;
    private String teacher;
    private int numberOfSeats;

    public Exam(int academicYear, String session, int yearOfStudy, String faculty, String domain, String course, String teacher, int numberOfSeats) {
        this.academicYear = academicYear;
        this.session = session;
        this.yearOfStudy = yearOfStudy;
        this.faculty = faculty;
        this.domain = domain;
        this.course = course;
        this.teacher = teacher;
        this.numberOfSeats = numberOfSeats;
    }

    public int getAcademicYear() {
        return academicYear;
    }

    public void setAcademicYear(int academicYear) {
        this.academicYear = academicYear;
    }

    public String getSession() {
        return session;
    }

    public void setSession(String session) {
        this.session = session;
    }

    public int getYearOfStudy() {
        return yearOfStudy;
    }

    public void setYearOfStudy(int yearOfStudy) {
        this.yearOfStudy = yearOfStudy;
    }

    public String getFaculty() {
        return faculty;
    }

    public void setFaculty(String faculty) {
        this.faculty = faculty;
    }

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }

    public int getNumberOfSeats() {
        return numberOfSeats;
    }

    public void setNumberOfSeats(int numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
