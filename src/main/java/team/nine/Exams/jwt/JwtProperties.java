package team.nine.Exams.jwt;

public class JwtProperties {
    public static final String SECRET = "team9";
    public static final int EXPIRATION_TIME = 864000000; // 10 days
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";

}
