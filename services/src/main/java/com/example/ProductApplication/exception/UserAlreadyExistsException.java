package com.example.ProductApplication.exception;

public class UserAlreadyExistsException extends Exception{

	private static final long serialVersionUID = 1L;
	private String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	public UserAlreadyExistsException(String message) {
		super(message);
		this.message = message;
	}
	@Override
	public String toString() {
		return "ProductAlreadyExistsException [message=" + message + "]";
	}

}
