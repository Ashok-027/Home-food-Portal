package com.hmmenu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.hmmenu.model.Menu;

import com.hmmenu.service.MenuServiceImpl;

@RestController
@RequestMapping("/menu")
@CrossOrigin
public class MenuController 
{
	@Autowired
	private MenuServiceImpl menuservice;
	
	@PostMapping("/add")
	public String  add(@RequestBody Menu menu)
	{
		menuservice.saveMenu(menu);
		return "Your menu is added";
	}
	
	@GetMapping("/show/{homemakerid}")
	public List<Menu> show(@PathVariable  int homemakerid)
	{
		List<Menu> m= menuservice.displayMenu(homemakerid);
		return m;
	}
	
	//given to customer page
	@GetMapping("/showkitchens/{kitchenname}")
	public List<Menu> showkitchen(@PathVariable  String kitchenname)
	{
		List<Menu> m1= menuservice.displayKitchen(kitchenname);
		return m1;
	}
	
	@PutMapping("/update")
	public Menu update(@RequestBody Menu menu) {
		menuservice.updateMenu(menu);
		return menu;
	}
	@DeleteMapping("/delete/{menu_id}")
	public String remove(@PathVariable int menu_id) {
		menuservice.removeMenu(menu_id);
		return "Removed from Menu List";
	}
	
}
