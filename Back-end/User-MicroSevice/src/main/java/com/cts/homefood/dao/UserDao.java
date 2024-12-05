package com.cts.homefood.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cts.homefood.model.DAOUser;

@Repository
public interface UserDao extends CrudRepository<DAOUser, Integer> {
	
	DAOUser findByUsername(String username);
	
	@Query(value = "SELECT max(id) from user", nativeQuery = true)
	int get_uid(String username);
	
	
	DAOUser findById(long id);
	
	List<DAOUser> findAll();
}