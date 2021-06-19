package com.example.ProductApplication.repositary;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.ProductApplication.models.User;

public interface UserRepositary extends CrudRepository<User,String> {

    
	User findByUserEmail(String useremail);
	
	@Query("select u from User u where u.role='ROLE_USER'")
	List<User>allUser();
	
	@Query("select u from User u where u.userStatus=1 and u.role='ROLE_USER'")
	List<User> activeUser();
	
	@Query("select u from User u where u.userStatus=0 and u.role='ROLE_USER'")
	List<User> deActiveUser();
	
	@Query("select u from User u where u.role='ROLE_USER' and u.userName like %:searchingString%")
	List<User> searchUser(@Param("searchingString") String searchString);
	
	List<User> findByRole(String role);

}



