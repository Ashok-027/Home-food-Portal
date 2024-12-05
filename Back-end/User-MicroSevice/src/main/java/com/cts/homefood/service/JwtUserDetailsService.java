package com.cts.homefood.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cts.homefood.dao.UserDao;
import com.cts.homefood.model.DAOUser;
import com.cts.homefood.model.UserDTO;

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
		newUser.setAddress(user.getAddress());
		newUser.setEmailId(user.getEmailId());
		newUser.setMobileNo(user.getMobileNo());
		return userDao.save(newUser);
	}
	
	public int get_id(String username)
	{
		int uid=userDao.get_uid(username);
		return uid;
	}
	
	public DAOUser getProfile(long id) {
		return userDao.findById(id);
	}
	
	public List<DAOUser> getUser(){
		//List<DAOUser> users=new ArrayList<>();
		//Iterable<DAOUser> user=userDao.findAll();
		//for(DAOUser duser:user) {
			//users.add(duser);
		//}
		return userDao.findAll();
	}
}