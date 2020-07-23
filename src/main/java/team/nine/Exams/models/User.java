package team.nine.Exams.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user_table")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uid")
    private int uid;

    @Column(name= "user_name")
    private String userName;

    @Column(name= "password")
    private String password;

    @Column(name= "email")
    private String email;

    @Column(name= "role")
    private String role;

    // private String token
    // or a list of tokens not yet implemented
}
