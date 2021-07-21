package com.springrest.springrest.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Course {
	
	@Id
	private long id;
	private String title;
	private String description;
	private String name;
	
	@Override
	public String toString() {
		return "Course [id=" + id + ", title=" + title + ", description=" + description + ", name=" + name + "]";
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Course(long id, String title, String description, String name) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.name = name;
	}

	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
