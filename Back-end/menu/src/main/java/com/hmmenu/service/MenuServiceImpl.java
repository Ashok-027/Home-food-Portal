package com.hmmenu.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hmmenu.model.Menu;
import com.hmmenu.repository.Menurepo;


@Service
public class MenuServiceImpl implements MenuService {
	
	@Autowired
	private Menurepo repo;
	
	
	public Menu saveMenu(Menu menu)
	{
		
		return repo.save(menu);
	}
	public List<Menu> displayMenu(int homemakerid)
	{
		return repo.findByHomemakerid(homemakerid);
	}
	public List<Menu> displayKitchen(String kitchenname)
	{
		return repo.findByKitchenname(kitchenname);
	}
	public Menu updateMenu(Menu menu) 
	{
		return repo.save(menu);
	}
	public String removeMenu(int menu_id) 
	{
		repo.deleteById(menu_id);
		return "Removed from Menu List";
	}
	
	
	
}
