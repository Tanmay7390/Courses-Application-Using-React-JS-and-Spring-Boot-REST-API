package com.springrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.Course;
import com.springrest.springrest.entities.Login;
import com.springrest.springrest.servises.Courseservice;
import com.springrest.springrest.servises.Loginservice;
import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.dao.LoginDao;

@CrossOrigin
@RestController
public class MyController {
	@Autowired
	private Courseservice courseservice;
	@Autowired
	private Loginservice loginservice;
	@Autowired
	public CourseDao coursedao;
	@Autowired
	public LoginDao logindao;
	
	public String namevalue;
	
	
	@GetMapping("/loginbyname/{name},{pass}")
	public List<Login> home(@PathVariable String name,@PathVariable String pass) {
		namevalue=name;
		return this.logindao.getA_Login(name,pass);
	}
	
	@GetMapping("/getname")
	public String value() {
		return namevalue;
	}
	
	@GetMapping("/getmaxid")
	public Long getmaxid() {
		return coursedao.getmaxid();
	}
	
	@GetMapping("/getloginmaxid")
	public Long getloginmaxid() {
		return logindao.getmaxid();
	}
	
	@GetMapping("/nullvalue")
	public void nullvalue() {
		namevalue="";
	}
	
	@GetMapping("/courses")
	public List<Course> getCourses()
	{
		return this.courseservice.getCourses();
	}
	
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId)
	{
		return this.courseservice.getCourse(Long.parseLong(courseId));
	}
	
	@GetMapping("/coursesbyName/{courseName}")
	public List<Course> getCoursebyname(@PathVariable String courseName)
	{
		return this.coursedao.getCoursebyName(courseName);
	}
	
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course)
	{
		return this.courseservice.addCourse(course);
	}
	
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course)
	{
		return this.courseservice.updateCourse(course);
	}
	
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId)
	{
		try {
			this.courseservice.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	////////////////////////////////////////////////////////////////////////////
	
	
	@GetMapping("/login")
	public List<Login> getAllLogin()
	{
		return this.loginservice.getAllLogin();
	}
	
	@GetMapping("/login/{loginId}")
	public Login getLogin(@PathVariable String loginId)
	{
		return this.loginservice.getLogin(Long.parseLong(loginId));
	}
	
	@PostMapping("/login")
	public Login addLogin(@RequestBody Login login)
	{
		namevalue=login.getUsername();
		return this.loginservice.addLogin(login);
	}
	
}
