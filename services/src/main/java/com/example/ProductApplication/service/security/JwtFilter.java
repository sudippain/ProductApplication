 package com.example.ProductApplication.service.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.ProductApplication.service.*;

public class JwtFilter extends OncePerRequestFilter {
	
	private static final Logger logger = LoggerFactory.getLogger(JwtFilter.class);
	@Autowired
	JwtGenerator jwtGenerator;
	@Autowired
	Userservice userService;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		logger.info("In filter");
		try{
		String jwt = getJwt(request);
		if(jwt != null && jwtGenerator.validateToken(jwt)){
			String userName = jwtGenerator.getUsernameFromToken(jwt);
			UserDetails userDetails = userService.loadUserByUsername(userName);
			UsernamePasswordAuthenticationToken authToken = new
					UsernamePasswordAuthenticationToken(
							userDetails, null, userDetails.getAuthorities());
			SecurityContextHolder.getContext().setAuthentication(authToken);
			}
		}
		catch(Exception ex){
			logger.error("Cannot authenticate user->{}", ex);
		}
		filterChain.doFilter(request, response);
	}

	private String getJwt(HttpServletRequest request) {
		String authHeader = request.getHeader("Authorization");
		if(authHeader != null && authHeader.startsWith("Bearer "))
			return authHeader.replace("Bearer ", "");
		return null;
	}

}
