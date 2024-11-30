package com.homemaker.model;

import java.io.Serializable;

public class JwtResponse implements Serializable {

	private static final long serialVersionUID = -8091879091924046844L;
	private final String jwttoken;
//	private String username;
//	private int id;
//	public JwtResponse(String jwttoken,int id,String username) {
//		this.jwttoken = jwttoken;
//		this.id=id;
//		this.username=username;
//	}
//	public String getUsername() {
//		return username;
//	}
//
//	public void setUsername(String username) {
//		this.username = username;
//	}
//
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
	private String username;
	private int id;
	private String kitchenname;
	public JwtResponse(String jwttoken,int id,String username,String kitchenname) {
		this.jwttoken = jwttoken;
		this.id=id;
		this.username=username;
		this.kitchenname=kitchenname;
	}
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	
	
	public String getKitchenname() {
		return kitchenname;
	}
	public void setKitchenname(String kitchenname) {
		this.kitchenname = kitchenname;
	}
	public String getToken() {
		return this.jwttoken;
	}
//public JwtResponse(String jwttoken) {
//	super();
//	this.jwttoken = jwttoken;
//}
	
	
}
