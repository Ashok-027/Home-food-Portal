package com.hmmenu.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.hmmenu.model.Menu;

@Repository
public interface Menurepo extends JpaRepository<Menu, Integer> {

	
	List<Menu> findByHomemakerid(int homemakerid);
	List<Menu> findByKitchenname(String kitchenname);
	
	
}
