package team.nine.Exams;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ExamsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExamsApplication.class, args);
	}

//	@Bean
//	public FilterRegistrationBean corsFilterRegistration(){
//		FilterRegistrationBean registrationBean = new FilterRegistrationBean(new CORSFilter());
//		registrationBean.setName("CORS FILTER");
//		registrationBean.addUrlPatterns("/*");
//		registrationBean.setOrder(1);
//		return registrationBean;
//	}
}
