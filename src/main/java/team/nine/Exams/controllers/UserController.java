package team.nine.Exams.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import team.nine.Exams.exceptions.EmailAlreadyTakenException;
import team.nine.Exams.exceptions.UsernameAlreadyTakenException;
import team.nine.Exams.models.User;
import team.nine.Exams.repositories.UserRepository;
import team.nine.Exams.services.UserService;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

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


    @PostMapping("/users/register")
    public Optional<User> registerUser(@RequestBody User user){
        logger.info("Registering new user request {}",user.toString());

        try {
            userService.registerUser(
                    user.getUsername(),
                    user.getPassword(),
                    user.getEmail()
            );
        }
        catch (EmailAlreadyTakenException exception){
            logger.error("User Email {} already exists", user.getEmail());
            throw new ResponseStatusException(HttpStatus.FOUND, "User email found", exception);
        }
        catch (UsernameAlreadyTakenException exception){
            logger.error("Username {} already exists", user.getUsername());
            throw new ResponseStatusException(HttpStatus.FOUND, "Username found", exception);
        }
        return userRepository.findUserName(user.getUsername());
    }



    // Updating user
    @PutMapping("/user/{id}")
    public User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(Math.toIntExact(id))
                .map(user -> {
                    user.setUsername(newUser.getUsername());
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
