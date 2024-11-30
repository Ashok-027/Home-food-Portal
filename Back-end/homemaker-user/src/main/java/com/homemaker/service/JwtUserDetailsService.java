package com.homemaker.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.homemaker.dao.UserDao;
import com.homemaker.model.DAOUser;
import com.homemaker.model.UserDTO;



@Service
public class JwtUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserDao userDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		DAOUser user = userDao.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				new ArrayList<>());
	}
	
	public DAOUser save(UserDTO user) {
		DAOUser newUser = new DAOUser();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		newUser.setEmailId(user.getEmailId());
		newUser.setAddress(user.getAddress());
		newUser.setMobileNo(user.getMobileNo());
		
		newUser.setOpening_time(user.getOpening_time());
		newUser.setClosing_time(user.getClosing_time());
		newUser.setLocation(user.getLocation());
		newUser.setKitchenname(user.getKitchenname());
		return userDao.save(newUser);
	}
	
//	public int get_id(String username)
//	{
//		int uid=userDao.get_uid(username);
//		return uid;
//	}
	
	public int get_id(String username)
	{
		int uid=userDao.get_uid(username);
		return uid;
	}
	
	public String get_kitchen(String username) {
		String kitchen = userDao.get_kitchen(username);
		return kitchen;
	}
	
	
	public String get_mobile(String kitchenname) {
		String p=userDao.get_mobile(kitchenname);
		return p;
	}
	
	public List<DAOUser> findByLocation(String location){
		return userDao.findByLocation(location);
	}
	
	
	public DAOUser getProfile(long id) {
		return userDao.findById(id);
	}
}