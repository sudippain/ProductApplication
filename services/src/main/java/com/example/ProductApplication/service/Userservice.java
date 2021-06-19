package com.example.ProductApplication.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.ProductApplication.models.User;
import com.example.ProductApplication.repositary.UserRepositary;

@Service
@Transactional
public class Userservice implements UserDetailsService {
	
	@Autowired
	UserRepositary userrepo;
	@Autowired
	PasswordEncoder encoder;
	
	
//	1.User Registration
	
	public String userRegistration(User user){
		
		if(userrepo.findByUserEmail(user.getUserEmail())!=null )    //when Email already exists
			return "Email Already Exists";
		else
		{
		user.setUserPassword(encoder.encode(user.getUserPassword()));
		 userrepo.save(user);
		return "User Registration Successfull";
		}
		
	}
	
//	2.if user is BlackList then if user wants to login
	public Boolean backListUserLogin(User user){
		User u=userrepo.findByUserEmail(user.getUserEmail());
		return u.isUserStatus();
		
	}

	
//	3.Get All Active user
	
	public List<User> getAllActiveUser(){
		return (List<User>) userrepo.activeUser();
	}
//	4.get All DeActive User
	
	public List<User> getAllDeActiveuser(){
		return userrepo.deActiveUser();
	}
//	5.Get User using search Box
	public List<User> searchUser(String searchVeriable){
          return userrepo.searchUser(searchVeriable);
	}
//	6.BlackList User
	
	public String blackListUser(String email){
		User user=userrepo.findByUserEmail(email);
		String alert=null;
		if(user != null ){
			if(user.isUserStatus()==true) {
	         	user.setUserStatus(false);
	         	alert=email+" is blacklisted";
			}
			else {
				user.setUserStatus(true);
				alert=email+" is resumed again";
			}
		userrepo.save(user);
		return alert;
		}
		else
		{
			return "Email Is Invalid";
		}
	}
	
//	7.During Login This is used For giving role to User
	
	public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {
		User user = userrepo.findByUserEmail(userEmail);
		List<GrantedAuthority> roles = new ArrayList<GrantedAuthority>();
		roles.add(new SimpleGrantedAuthority(user.getRole()));
		org.springframework.security.core.userdetails.User user1=new org.springframework.security.core.userdetails.User(user.getUserEmail(), user.getUserPassword(), roles);
		return user1;
	}
     
	
	
	
	
	//9.User Details fetch using email
	public User userDetails(String userEmail) {
		
		return userrepo.findByUserEmail(userEmail);
	}

	
	//11.Getting All Users roleType= User
	public List<User> getAllUsers(){
		return userrepo.findByRole("ROLE_USER");
	}
	
	
	
	}

