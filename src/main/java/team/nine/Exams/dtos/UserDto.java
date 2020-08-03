package team.nine.Exams.dtos;
import lombok.Builder;
import lombok.Value;

@Value
@Builder(toBuilder = true)

public class UserDto {
    private int uid;
    private String userName;

    private String email;
    private String role;
}
