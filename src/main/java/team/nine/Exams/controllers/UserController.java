package team.nine.Exams.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import team.nine.Exams.models.Exam;
import team.nine.Exams.models.User;
import team.nine.Exams.repositories.UserRepository;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);


    @GetMapping("/users")
    public List<User> getUsers(){
        logger.info("Get all users request");
        return userRepository.findAll();
    }

    @GetMapping("/users/{name}")
    public User getUser(@PathVariable("name") String name){
        logger.info("Get user by name: {} request",name);

        return userRepository.findUserName(name)
                .orElseThrow(() ->{
                    logger.error("User with name: {} not found",name);
                    return new ResponseStatusException(
                            HttpStatus.NOT_FOUND,
                            String.format("User with name: %s not found",name)
                    );
                });
    }
    //updating an exam using the id
    @PutMapping("/user/{id}")
    private User replaceUser(@RequestBody User newUser, @PathVariable Long id) {

        return userRepository.findById(Math.toIntExact(id))
                .map(user -> {
                    user.setUserName(newUser.getUserName());
                    user.setPassword(newUser.getPassword());
                    user.setEmail(newUser.getEmail());
                    user.setRole(newUser.getRole());
                    return userRepository.save(user);
                })
                .orElseGet(() -> {
                    newUser.setId(id);
                    return userRepository.save(newUser);
                });
    }
}
