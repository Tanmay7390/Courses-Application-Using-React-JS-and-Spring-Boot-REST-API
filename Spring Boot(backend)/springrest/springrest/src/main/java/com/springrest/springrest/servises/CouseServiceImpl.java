package com.springrest.springrest.servises;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Course;

@Service
public class CouseServiceImpl implements Courseservice {
	
//	List<Course> list;
	@Autowired
	private CourseDao coursedao;
	
	public CouseServiceImpl() {
//		list =new ArrayList<>();
//		list.add(new Course(111, "Java Core", "descrip"));
//		list.add(new Course(112, "Cpp Core", "descrip"));
	}
	@Override
	public List<Course> getCourses() {
		return coursedao.findAll();
	}
	
	@Override
	public Course getCourse(long courseId) {
		
//		Course c=null;
//		for(Course course:list)
//		{
//			if(course.getId()==courseId)
//			{
//				c=course;
//				break;
//			}
//		}
		
		return coursedao.findById(courseId).get();
	}
	
	@Override
	public Course addCourse(Course course) {
//		list.add(course);
		coursedao.save(course);
		return course;
	}
	@Override
	public Course updateCourse(Course course) {
		
//		list.forEach(e -> {
//			if(e.getId()== course.getId())
//			{
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//			}
//		});
		coursedao.save(course);
		return course;
	}
	@Override
	public void deleteCourse(long parseLong) {
//		list=this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
		Course entity=coursedao.findById(parseLong).get();
		coursedao.delete(entity);
	}
}
