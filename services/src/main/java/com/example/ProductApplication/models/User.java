package com.example.ProductApplication.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonProperty;





@Entity
@Table(name="UserDetails")
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="U_Id")
	private int  userId;
	
	@NotBlank(message="Name canot be null")
	@Size(min=2,max=20,message="Message must be two character")
	@Pattern(regexp="^[a-zA-Z ]+$", message="Name can only contain alphabets")
	@Column(name="U_Name")
	String userName;
	
	@NotBlank(message="Email Cant be null")
	
	@Pattern(regexp="^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_]{2,5})\\.([a-zA-Z]{2,5})$",message="Email must Follow Email Pattern")
	@Column(name="U_Email")
	private String userEmail;
	
	@NotBlank(message="Number canot be null")
	@Size(min=10,max=10,message="Number must be ten character")
	@Column(name="U_ContactNumber")
	private String userContactNumber;
	
	@NotBlank(message="Password Cant be null")
	@Pattern(regexp="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@#$%&*!]).{8,}$",message="Password must contain at least eight characters, one capital letter, one small letter and at least one number")
	@Column(name="U_Password")
	private String userPassword;
	

	@JsonProperty
	@Column(name="U_Status")
	private boolean userStatus;
    
	@Column(name="U_Role")
    private String role;
	
	public User(){}
    
	public User(int i, String string2, String string3, String string4, String string5, String string6,
			boolean b) {
		// TODO Auto-generated constructor stub
	}


	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getUserEmail() {
		return userEmail;
	}


	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}





	public String getUserContactNumber() {
		return userContactNumber;
	}


	public void setUserContactNumber(String userContactNumber) {
		this.userContactNumber = userContactNumber;
	}


	public boolean isUserStatus() {
		return userStatus;
	}


	public void setUserStatus(boolean userStatus) {
		this.userStatus = userStatus;
	}


	public String getUserPassword() {
		return userPassword;
	}


	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", userEmail=" + userEmail + ", userPassword="
				+ userPassword + ", userStatus=" + userStatus + "]";
	}
	


}
