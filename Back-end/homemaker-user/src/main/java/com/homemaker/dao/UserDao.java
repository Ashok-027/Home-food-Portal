package com.homemaker.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.homemaker.model.DAOUser;


@Repository
public interface UserDao extends CrudRepository<DAOUser, Integer> {
	
	DAOUser findByUsername(String username);
	
//	@Query(value = "SELECT max(id) from user", nativeQuery = true)
//	int get_uid(String username);
	
	@Query(value = "SELECT id from homemakeruser where username= :username", nativeQuery = true)
	int get_uid(String username);
	
	
	List<DAOUser> findByLocation(String location);
	
	@Query(value = "SELECT kitchenname from homemakeruser where username= :username", nativeQuery = true)
	String get_kitchen(String username);
	
	@Query(value = "SELECT mobile_no from homemakeruser where kitchenname= :kitchenname",nativeQuery = true)
	String get_mobile(String kitchenname);
	
	
	DAOUser findById(long id);
}