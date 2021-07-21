import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse=()=>{

    useEffect(()=>{
        document.title="Add Courses";
    });

    const [course,setCourse] = useState({});

    useEffect(()=>{
        getName();
        getId();
    },[]);

    const handleForm=(e)=>{
        getName();
        postDataToServer(course);
        e.preventDefault();
    }

    const getName=(e)=>{
        axios.get(`${base_url}/getname`).then(
        (response)=>{
            if(response.data==="")
            {
                document.getElementById("main").style.display="none";
            }else{
                course.name=response.data;
            }
        })
    };

    const getId=(e)=>{
        axios.get(`${base_url}/getmaxid`).then(
        (response)=>{
            course.id=response.data+1;
        })
    };

    const postDataToServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                document.getElementById("title").value = "";
                document.getElementById("description").value = "";
                toast.info("Course Succesfully added!!!");
            },(error)=>{
                toast.error("Failed to add");
            }
        )
    }

    return(
        <div id="main">
            <Fragment>
            <h1 >Fill Course Details</h1>
            <br/>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="title" >Course Title</label>
                    <br/>
                    <Input type="text"
                    placeholder="Enter Title here"
                    name="title" 
                    id="title"
                    style={{marginBottom:20}}
                    onChange={(e)=>{
                        setCourse({...course,title:e.target.value});
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for="description" >Course Description</label>
                    <br/>
                    <Input type="textarea"
                    placeholder="Enter Description here"
                    name="description" 
                    id="description"
                    style={{marginBottom:4}}
                    onChange={(e)=>{
                        setCourse({...course,description:e.target.value});
                    }}/>
                </FormGroup>
                <br/>
                <Container className="text-center">
                    <Button type="submit" color="success ">AddCourse</Button>
                    <Button color="warning mx-3" type="reset"
                    onClick={()=>{
                        setCourse({});
                    }}>Clear</Button>
                </Container>
            </Form>
        </Fragment>
        </div>

    );
}
export default AddCourse;