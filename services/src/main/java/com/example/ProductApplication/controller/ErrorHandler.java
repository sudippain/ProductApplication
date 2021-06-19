package com.example.ProductApplication.controller;

import java.util.List;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;



public class ErrorHandler {
	
	Logger logger = LoggerFactory.getLogger(ErrorHandler.class);
	  
	String defaultMessage = "";

	@ExceptionHandler(Exception.class)
	@ResponseStatus(code = HttpStatus.BAD_REQUEST)
	public String handleError(Exception ex) {
		//logger.info("In handler" + ex.getMessage());
		  logger.error("{}",ex);
		if (ex instanceof ConstraintViolationException) {                           //Used for Hibernate SeesionFactory
			ConstraintViolationException constraintException = (ConstraintViolationException) ex;
			Set<ConstraintViolation<?>> set = constraintException.getConstraintViolations();
			String errorMessage = "Input validation failed: ";
			for (ConstraintViolation<?> constraintViolation : set)
				errorMessage += constraintViolation.getMessageTemplate() + " ";
			return errorMessage;
		} else if (ex instanceof MethodArgumentNotValidException) {                 //Used for Jpa Entity managerFactry
			defaultMessage = "Error: ";
			MethodArgumentNotValidException exp = (MethodArgumentNotValidException) ex;
			BindingResult bindingResult = exp.getBindingResult();
			List<FieldError> fieldError = bindingResult.getFieldErrors();
			fieldError.stream().forEach(err -> {
				String test = err.getDefaultMessage() + ",";
				defaultMessage += test;
			});
			return defaultMessage.substring(0, defaultMessage.length() - 1);
		}
		return "System Error It Could Handle By Admin";
		
	
	}
	

}
