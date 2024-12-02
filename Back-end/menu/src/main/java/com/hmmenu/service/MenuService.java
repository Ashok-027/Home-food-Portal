package com.hmmenu.service;


import java.util.List;


import com.hmmenu.model.Menu;


public interface MenuService {
	public Menu saveMenu(Menu menu);

	public List<Menu> displayMenu(int homemakerid);
	public List<Menu> displayKitchen(String kitchenname);
	
	public Menu updateMenu(Menu menu) ;
	public String removeMenu(int menu_id) ;
	//public String removeAllMenu();
	
	
}
