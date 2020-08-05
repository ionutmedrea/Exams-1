package team.nine.Exams.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import team.nine.Exams.jwt.UserPrincipal;
import team.nine.Exams.models.User;
import team.nine.Exams.repositories.UserRepository;

@Service
public class UserPrincipalDetailsService  implements UserDetailsService {
    private UserRepository userRepository;

    public UserPrincipalDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User user = this.userRepository.findByUsername(s);
        UserPrincipal userPrincipal = new UserPrincipal(user);

        return userPrincipal;
    }
}
