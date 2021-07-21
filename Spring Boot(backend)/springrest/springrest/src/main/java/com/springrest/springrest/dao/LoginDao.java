package com.springrest.springrest.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.springrest.springrest.entities.Login;

public interface LoginDao extends JpaRepository<Login, Long>{
	
	@Query(value="SELECT * FROM Login WHERE username=:name AND password=:pass",nativeQuery = true)
	public List<Login> getA_Login(@Param("name") String name,@Param("pass") String pass);
	
	public static final String Get_Col = "Select max(id) From Login";
	@Query (value = Get_Col, nativeQuery=true)
	public Long getmaxid();
}
