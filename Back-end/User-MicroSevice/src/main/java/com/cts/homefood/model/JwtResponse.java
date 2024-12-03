package com.cts.homefood.model;

import java.io.Serializable;

public class JwtResponse implements Serializable {

	private static final long serialVersionUID = -8091879091924046844L;
	private final String jwttoken;
	private String username;
	private int id;
	public JwtResponse(String jwttoken,int id,String username) {
		this.jwttoken = jwttoken;
		this.id=id;
		this.username=username;
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
	
	public String getToken() {
		return this.jwttoken;
	}
}