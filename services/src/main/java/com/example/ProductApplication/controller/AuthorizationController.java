package com.example.ProductApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ProductApplication.exception.ProductNotFoundException;
import com.example.ProductApplication.models.*;
import com.example.ProductApplication.service.ProductService;
import com.example.ProductApplication.service.Userservice;
@RestController
@RequestMapping("admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthorizationController extends ErrorHandler {

	@Autowired
	Userservice userservice;
	
	@Autowired
	ProductService productService;
	
//	Get all  Users Only Admin Can Access This Method

	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@GetMapping("/getAllUsers")
	public List<User> getAllusers(){
		return userservice.getAllUsers();
	}
	
//	Get all Active Users Only Admin Can Access This Method
	
	@GetMapping("/getAllAciveUser")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public List <User> getAllActiveUser()
	{
		List<User> listAllActiveUser=userservice.getAllActiveUser();
		return listAllActiveUser;
		
	}
	
//	Get All Decative Users Only Admin Can Access This Method
	
	@GetMapping("/getAllDeAciveUser")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public List<User> getAllDeActiveUse(){
		List<User> listAllDeActiveUser=userservice.getAllDeActiveuser();
		return listAllDeActiveUser;
	}
//	This method is used for search user using username keyword it's may be substring
	@GetMapping("/getSearchUsers/{userName}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public List<?> getLikeUserName(@PathVariable("userName")String uname) {
		List<User> list = userservice.searchUser(uname);
		
		return list;
	}
	
	//This method is used for search user using userEmail
	@GetMapping("/getUserDetails/{email}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public User userDetails(@PathVariable("email") String userEmail){
		
		System.out.println(userEmail);
		
		System.out.println(userservice.userDetails(userEmail));
    	return userservice.userDetails(userEmail);
			
		
	}
	
//	 This Method Is used To Active/Deactive An Account Only Admin Can Access This Method
	
	@GetMapping("/changeStatus/{userEmail}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public String changeStatus(@PathVariable("userEmail")String email) {
		
		 return userservice.blackListUser(email);
	}
	
	
//	 This Method Is used To getProductList An Account Only Admin Can Access This Method
	@GetMapping("/getUserProductList/{email}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<?> userProductList(@PathVariable("email") String userEmail) throws ProductNotFoundException {
		System.out.println("Inside History");
		ResponseEntity<?> responseEntity=null;
		
		
		try {
			responseEntity = new ResponseEntity<List<ProductDetails>>(productService.getUserProductList(userEmail),HttpStatus.OK);
		}
		catch (ProductNotFoundException e) {
			responseEntity = new ResponseEntity<String>("{\"message\":\""+e.getMessage()+"\"}",HttpStatus.CONFLICT);
		}catch (Exception e) {
			responseEntity = new ResponseEntity<String>("{\"message\":\""+e.getMessage()+"\"}",HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return responseEntity;
		  
	}
	
//	 This Method Is used To getProductList An Account Only Admin Can Access This Method
	@GetMapping("/getAllProductList")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<?> userNewsHistory() throws ProductNotFoundException{
		System.out.println("Inside History");
	ResponseEntity<?> responseEntity=null;
		
		
		try {
			responseEntity = new ResponseEntity<List<ProductDetails>>(productService.getProductList(),HttpStatus.OK);
		}
		catch (ProductNotFoundException e) {
			responseEntity = new ResponseEntity<String>("{\"message\":\""+e.getMessage()+"\"}",HttpStatus.CONFLICT);
		}catch (Exception e) {
			responseEntity = new ResponseEntity<String>("{\"message\":\""+e.getMessage()+"\"}",HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return responseEntity;
	}
	
	
	
}
