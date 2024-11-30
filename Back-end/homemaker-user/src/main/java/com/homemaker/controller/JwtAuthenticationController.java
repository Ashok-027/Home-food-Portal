package com.homemaker.controller;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.homemaker.config.JwtTokenUtil;
import com.homemaker.model.DAOUser;
import com.homemaker.model.JwtRequest;
import com.homemaker.model.JwtResponse;
import com.homemaker.model.UserDTO;
import com.homemaker.service.JwtUserDetailsService;


@RestController
@CrossOrigin
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;

	@RequestMapping(value = "/homemakerlogin", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());

//		final String token = jwtTokenUtil.generateToken(userDetails);
		final String token = jwtTokenUtil.generateToken(userDetails);
		String username=authenticationRequest.getUsername();
		int id=userDetailsService.get_id(username);
		String kitchenname=userDetailsService.get_kitchen(username);

		return ResponseEntity.ok(new JwtResponse(token,id,username,kitchenname));
	}
//		String username=authenticationRequest.getUsername();
//		int id=userDetailsService.get_id(username);
//
//		return ResponseEntity.ok(new JwtResponse(token,id,username));

//		return ResponseEntity.ok(new JwtResponse(token));
	
	
	@RequestMapping(value = "/homemakersignin", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
		return ResponseEntity.ok(userDetailsService.save(user));
	}

	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
	
	
	@GetMapping("/find/{location}")
	public List<DAOUser> displayLocation(@PathVariable String location){
		return userDetailsService.findByLocation(location);
	}
	
	
	@GetMapping("/getm/{kitchenname}")
	public String displayKitchen(@PathVariable String kitchenname) {
		return userDetailsService.get_mobile(kitchenname);
	}
	
	
	@GetMapping("/profile/{id}")
	public DAOUser displayProfile(@PathVariable long id) {
		return userDetailsService.getProfile(id);
	}
}