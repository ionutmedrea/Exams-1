package team.nine.Exams.repositories;

import org.apache.catalina.mapper.Mapper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import team.nine.Exams.models.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Integer> {
    @Query(value = "SELECT u from User u WHERE u.userName = ?1")
    Optional<User> findUserName(String username);

    @Query(value = "SELECT u FROM User u WHERE u.email = ?1")
    Optional<User> findByEmail(String email);

    @Query(value = "SELECT u from User u WHERE u.role = ?1")
    Optional<User> findByRole(String role);



    boolean existsByUserName(String username);

    boolean existsByEmail(String email);

    boolean existsByRole(String role);


}
