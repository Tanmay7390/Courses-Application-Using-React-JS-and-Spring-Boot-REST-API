package com.springrest.springrest.servises;

import java.util.List;

import com.springrest.springrest.entities.Login;

public interface Loginservice {
	
	public List<Login> getAllLogin();
	
	public Login getLogin(long LoginId);
	
	public Login addLogin(Login login);
}
