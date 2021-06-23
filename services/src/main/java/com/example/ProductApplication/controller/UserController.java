package com.example.ProductApplication.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ProductApplication.exception.ProductAlreadyExistsException;
import com.example.ProductApplication.exception.ProductNotFoundException;
import com.example.ProductApplication.models.ProductDetails;
import com.example.ProductApplication.models.User;
import com.example.ProductApplication.service.ProductService;
import com.example.ProductApplication.service.Userservice;
import com.example.ProductApplication.service.security.JwtGenerator;

import io.jsonwebtoken.Jwts;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserController extends ErrorHandler {

	@Autowired
	private Userservice userservice;

	@Autowired
	private ProductService productService;

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	JwtGenerator jwtGenerator;

	@Autowired
	PasswordEncoder encoder;

	@Value("${practice.key}")
	private String secretKey;

	@GetMapping("/status")
	public String statusCheck() {
		return "Healthy";
	}

	@PostMapping("/registerUser")
	public String registerUser(@Valid @RequestBody User user) {
		System.out.println("Inside Controller");

		return userservice.userRegistration(user);

	}

	@PostMapping("/login")
	public String login(@RequestBody User appUser) {
		System.out.println("Sudip");
		logger.info("inside login");
		System.out.println("User name "+ appUser.getUserEmail() + " User Password "+ appUser.getUserPassword());
		if (!userservice.backListUserLogin(appUser)) {
			return "User Already BlackListed";
		} else {
			Authentication authentication = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(appUser.getUserEmail(), appUser.getUserPassword()));
			SecurityContextHolder.getContext().setAuthentication(authentication);
			String jwt = jwtGenerator.generateToken(authentication);
			return jwt;
		}
	}

	@GetMapping("/getUserDetails")
	@PreAuthorize("hasRole('ROLE_USER')")
	public User userDetails(final HttpServletRequest req) {

		final HttpServletRequest request = (HttpServletRequest) req;
		final String authHeader = request.getHeader("authorization");
		final String token = authHeader.substring(7);
		String userEmail = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
		return userservice.userDetails(userEmail);

	}

	@PreAuthorize("hasRole('ROLE_USER')")
	@PostMapping("/addproduct")
	public ResponseEntity<?> saveNewProduct(@RequestBody final ProductDetails product, final HttpServletRequest request,
			final HttpServletResponse response) throws ProductAlreadyExistsException {

		final String authHeader = request.getHeader("authorization");
		final String token = authHeader.substring(7);
		String userEmail = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
		ResponseEntity<?> responseEntity;
		try {
			product.setUserEmail(userEmail);

			responseEntity = new ResponseEntity<ProductDetails>(productService.addproduct(product), HttpStatus.CREATED);

		} catch (ProductAlreadyExistsException e) {
			responseEntity = new ResponseEntity<String>("{\"message\":\"" + e.getMessage() + "\"}",
					HttpStatus.CONFLICT);
		} catch (Exception e) {
			responseEntity = new ResponseEntity<String>("{\"message\":\"" + e.getMessage() + "\"}",
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return responseEntity;
	}

	@PreAuthorize("hasRole('ROLE_USER')")
	@PostMapping("/updateproduct")
	public ResponseEntity<?> updateProduct(@RequestBody final ProductDetails product, final HttpServletRequest request,
			final HttpServletResponse response) throws ProductNotFoundException {

		final String authHeader = request.getHeader("authorization");
		final String token = authHeader.substring(7);
		String userEmail = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
		ResponseEntity<?> responseEntity;
		try {
			product.setUserEmail(userEmail);

			responseEntity = new ResponseEntity<ProductDetails>(productService.updateProduct(product),
					HttpStatus.CREATED);

		} catch (ProductNotFoundException e) {
			responseEntity = new ResponseEntity<String>("{\"message\":\"" + e.getMessage() + "\"}",
					HttpStatus.CONFLICT);
		} catch (Exception e) {
			responseEntity = new ResponseEntity<String>("{\"message\":\"" + e.getMessage() + "\"}",
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return responseEntity;
	}

	@PreAuthorize("hasRole('ROLE_USER')")
	@DeleteMapping({ "/delete/product/{id}" })
	public ResponseEntity<?> productlist(@PathVariable("id") int productid, final HttpServletRequest req)
			throws ProductNotFoundException {

		final HttpServletRequest request = (HttpServletRequest) req;
		final String authHeader = request.getHeader("authorization");
		final String token = authHeader.substring(7);

		String userEmail = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
		ResponseEntity<?> responseEntity;
		try {
			responseEntity = new ResponseEntity<>(productService.deleteProduct(productid, userEmail), HttpStatus.OK);
		} catch (ProductNotFoundException e) {
			responseEntity = new ResponseEntity<String>("{\"message\":\"" + e.getMessage() + "\"}",
					HttpStatus.CONFLICT);
		} catch (Exception e) {
			responseEntity = new ResponseEntity<String>("{\"message\":\"" + e.getMessage() + "\"}",
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return responseEntity;
	}

	@PreAuthorize("hasRole('ROLE_USER')")
	@GetMapping({ "/productlist" })
	public ResponseEntity<?> productlist(final HttpServletRequest req) throws ProductNotFoundException {

		final HttpServletRequest request = (HttpServletRequest) req;
		final String authHeader = request.getHeader("authorization");
		final String token = authHeader.substring(7);
		String userEmail = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
		ResponseEntity<?> responseEntity = null;

		try {
			responseEntity = new ResponseEntity<List<ProductDetails>>(productService.productList(userEmail),
					HttpStatus.OK);
		} catch (ProductNotFoundException e) {
			responseEntity = new ResponseEntity<String>("{\"message\":\"" + e.getMessage() + "\"}",
					HttpStatus.CONFLICT);
		} catch (Exception e) {
			responseEntity = new ResponseEntity<String>("{\"message\":\"" + e.getMessage() + "\"}",
					HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return responseEntity;
	}

}
