package com.springrest.springrest.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Login {
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Login(long id, String username, String password) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
	}
	@Id
	private long id;
	private String username;
	private String password;
	@Override
	public String toString() {
		return "Login [id=" + id + ", username=" + username + ", password=" + password + "]";
	}
}
