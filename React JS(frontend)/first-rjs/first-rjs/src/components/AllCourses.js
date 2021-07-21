import React, { useState,useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses=()=>{

    useEffect(()=>{
        document.title="All Courses";
    });

    const getAllCoursesFromServer=(name)=>{
        axios.get(`${base_url}/coursesbyName/${name}`).then(
            (response)=>{
                toast.info("Courses loaded Succesfully!!!");
                setCourses(response.data);
            },
            (error)=>{
                toast.error("Something went wrong");
            })
    };

    const getName=()=>{
        axios.get(`${base_url}/getname`).then(
        (response)=>{
            if(response.data==="")
            {
                document.getElementById("main").style.display="none";
            }else{
                getAllCoursesFromServer(response.data);
            }
        })
    };

    useEffect(()=>{getName();},[]);

    const [courses,setCourses]=useState([]);

    const removeCourse=(id)=>{
        setCourses(courses.filter((c)=>c.id!==id));
    }

    return(
        <div id="main">
            <h1>All Courses</h1>
            {
                courses.length>0?  courses.map((item)=>(
                    <Course key={item.id} course={item} update={removeCourse}/>
                )): "No courses"
            }

        </div>
    );
}

export default AllCourses;