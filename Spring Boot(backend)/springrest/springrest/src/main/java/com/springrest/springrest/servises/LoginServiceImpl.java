package com.springrest.springrest.servises;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.LoginDao;
import com.springrest.springrest.entities.Login;

@Service
public class LoginServiceImpl implements Loginservice{
	
	@Autowired
	private LoginDao Logindao;
	
	public LoginServiceImpl() {
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public List<Login> getAllLogin() {
		// TODO Auto-generated method stub
		return Logindao.findAll();
	}

	@Override
	public Login getLogin(long LoginId) {
		// TODO Auto-generated method stub
		return Logindao.findById(LoginId).get();
	}

	@Override
	public Login addLogin(Login login) {
		Logindao.save(login);
		return login;
	}
	
}
