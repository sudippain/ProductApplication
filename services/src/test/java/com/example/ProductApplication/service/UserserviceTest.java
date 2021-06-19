package com.example.ProductApplication.service;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.internal.verification.Times;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.example.ProductApplication.exception.UserNotFoundException;
import com.example.ProductApplication.models.User;
import com.example.ProductApplication.repositary.UserRepositary;
import com.example.ProductApplication.service.Userservice;

public class UserserviceTest {

	@Mock
	UserRepositary mockRepo;
//	@Mock
//	UserHistoryrepository mockHistoryRepo;
	@Mock
	PasswordEncoder mockPassEncode;
	
	@InjectMocks
	Userservice mockService;
	
	@Before
	public void init(){
	      MockitoAnnotations.initMocks(this);
	}
	
	//If User register Successfully
	@Test
	public void testRegistrationSuccessfully(){
		User u=new User(1,"Anik se","a@a.com","9831254789","Anik12344@","ROLE_USER",true);
		
		
		when(mockRepo.findByUserEmail(u.getUserEmail())).thenReturn(null);
//		when(mockPassEncode.encode("Sudip1234@")).thenReturn("Sudip1234@");
//		when(mockRepo.save(u)).thenReturn(u);
		assertEquals("User Registration Successfull",mockService.userRegistration(u));
		
	}

	//If User register fail due to existing email
		@Test
		public void testFailWhenEmailExists(){
			User u=new User(1,"Anik se","a@a.com","9831254789","Anik12344@","ROLE_USER",true);			
			when(mockRepo.findByUserEmail(u.getUserEmail())).thenReturn(u);
			assertEquals("Email Already Exists",mockService.userRegistration(u));
			
		}
		
	//When Blacklist user wants to login
		@Test
		public void backListUserLogin(){
					
			User u=new User();
			u.setUserEmail("a@gmail.com");
			when(mockRepo.findByUserEmail(u.getUserEmail())).thenReturn(u);
			assertEquals(false,mockService.backListUserLogin(u));
		}
	//Get all Active user
		@Test
		public void allActiveUserTest(){
			List<User> u=new ArrayList<User>();
			when(mockRepo.activeUser()).thenReturn(u);
			assertEquals(u,mockService.getAllActiveUser());
			
		}
		
	//Get All DeActive User
		@Test
		public void allDeactiveUserTest(){
			List<User> u=new ArrayList<User>();
			when(mockRepo.deActiveUser()).thenReturn(u);
			assertEquals(u,mockService.getAllDeActiveuser());
		}

	//Get User using search Box
		@Test
		public void getUserUsingSearchBoxtest() throws UserNotFoundException{
			List<User> u=new ArrayList<User>();
			when(mockRepo.searchUser("sudip")).thenReturn(u);
			assertEquals(u,mockService.searchUser("sudip"));
		}
	//BlackList User Test when status is true
		@Test
		public void backListUser(){
			User u=new User();
			u.setUserStatus(true);
			when(mockRepo.findByUserEmail("sudip@gmail.com")).thenReturn(u);
			when(mockRepo.save(u)).thenReturn(u);
			assertEquals("Do You Want To Backlist",mockService.blackListUser("sudip@gmail.com"));
		}
	//Retain User Test when status is true
			@Test
			public void retainUserTest(){
				User u=new User();
				u.setUserStatus(false);
				when(mockRepo.findByUserEmail("sudip@gmail.com")).thenReturn(u);
				when(mockRepo.save(u)).thenReturn(u);
				assertEquals("Do You Want To Retain",mockService.blackListUser("sudip@gmail.com"));
			}
		//when Email does not exist
		@Test
		public void emailNotPresent(){
			User u=new User();
			u.setUserStatus(false);
			when(mockRepo.findByUserEmail("sudip@gmail.com")).thenReturn(null);
			
			assertEquals("Email Is Invalid",mockService.blackListUser("sudip@gmail.com"));
		}
	//During Login This is used For giving role to User
		@Test
		public void setUseRole(){
//			User u=new User();
//			when(mockRepo.findByUserEmail("sudip@gmail.com")).thenReturn(u);
//			assertEquals()
		}
		
		//User Search News
//		@Test
//		public void userSearchTset(){
//			UserSearchHistory usearch=new UserSearchHistory();
//			when(mockHistoryRepo.save(usearch)).thenReturn(usearch);
//			assertEquals("Save history",mockService.userSearch(usearch));
//		}
		
		//User Details fetch using email
		@Test
		public void userFetchUsingEmail(){
			User u=new User();
			when(mockRepo.findByUserEmail("sudip@gmail.com")).thenReturn(u);
			assertEquals(u,mockService.userDetails("sudip@gmail.com"));
		}
	//List of user History Of a Specific Email
//		@Test
//		public void listHistoryuser(){
//			List<UserSearchHistory> uhistory=new ArrayList<UserSearchHistory>();
//			when(mockHistoryRepo.searchByUserEmail("sudip@gmail.com")).thenReturn(uhistory);
//			assertEquals(uhistory,mockService.userSearchHistory("sudip@gmail.com"));
//		}
	//Getting All Users roleType= User
		@Test
		public void allUser(){
			List<User> u=new ArrayList<User>();
			when(mockRepo.findByRole("ROLE_USER")).thenReturn(u);
			assertEquals(u,mockService.getAllUsers());
			
		}
	//Delete history by user
//		@Test
//		public void deleteHistory(){
//			User u=new User(1,"Anik se","a@a.com","9831254789","Anik12344@","ROLE_USER",true);	
//			UserSearchHistory uhistory=new UserSearchHistory();
//			uhistory.setUserSearchId(1);
//			uhistory.setUserNewsSearch("modi");
//			uhistory.setSerachTime(null);
//			uhistory.setUserEmail("sudip@gmail.com");
//			mockService.deleteHistory(1);
//			verify(mockHistoryRepo,times(1)).deleteById(1);
//			
//			
//		}
		
}
