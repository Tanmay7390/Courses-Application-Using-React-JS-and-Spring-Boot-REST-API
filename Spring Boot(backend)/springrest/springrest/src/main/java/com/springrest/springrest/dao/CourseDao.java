package com.springrest.springrest.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.springrest.springrest.entities.Course;

public interface CourseDao extends JpaRepository<Course, Long>
{
	@Query(value="SELECT * FROM Course WHERE name=:name",nativeQuery = true)
	public List<Course> getCoursebyName(@Param("name") String name);
	
	public static final String Get_Col = "Select max(id) From Course";
	@Query (value = Get_Col, nativeQuery=true)
	public Long getmaxid();
	
}
