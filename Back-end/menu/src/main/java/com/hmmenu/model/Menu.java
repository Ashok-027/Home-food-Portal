package com.hmmenu.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "menu_details")
public class Menu {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int menu_id;
	@Column
	private int homemakerid;
	@Column
	private String menu_name;
	@Column
	private String menu_description;
	@Column
	private double menu_cost;
	@Column
	private String kitchenname;
	
	public int getMenu_id() {
		return menu_id;
	}
	
	public void setMenu_id(int menu_id) {
		this.menu_id = menu_id;
	}
	
	public int getHomemakerid() {
		return homemakerid;
	}

	public void setHomemakerid(int homemakerid) {
		this.homemakerid = homemakerid;
	}

	public String getMenu_name() {
		return menu_name;
	}
	public void setMenu_name(String menu_name) {
		this.menu_name = menu_name;
	}
	public String getMenu_description() {
		return menu_description;
	}
	public void setMenu_description(String menu_description) {
		this.menu_description = menu_description;
	}
	public double getMenu_cost() {
		return menu_cost;
	}
	public void setMenu_cost(double menu_cost) {
		this.menu_cost = menu_cost;
	}
	public String getKitchenname() {
		return kitchenname;
	}
	public void setKitchen_name(String kitchenname) {
		this.kitchenname = kitchenname;
	}
    
	

	
}
