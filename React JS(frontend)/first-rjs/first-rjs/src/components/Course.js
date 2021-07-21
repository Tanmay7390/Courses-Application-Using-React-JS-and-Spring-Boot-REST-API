import axios from "axios";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Card, CardBody, CardSubtitle,
CardText, Button, Container,Collapse,Form, Input,InputGroup,InputGroupAddon} from "reactstrap";
import base_url from "../api/bootapi";

const Course=({course,update})=>{

    const [course1,setCourse] = useState({});

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("Deleted");
                update(id);
            },(error)=>{
                toast.error("Failed to delete");
            }
        )
    }

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const handleForm=(e)=>{
        course.title=course1.title;
        course.description=course1.description;
        postDataToServer(course);
        e.preventDefault();
        document.getElementById("viewlink").click();
    }
    const postDataToServer=(data)=>{
        axios.put(`${base_url}/courses`,data).then(
            (response)=>{
                toast.info("Succesfully Updated!!!");
            },(error)=>{
                toast.error("Failed to update");
            }
        )
    }

    return (
        <Card className="text-center" body inverse color="info my-3">
            <CardBody>
                <CardSubtitle style={{fontSize:30}}>{course.title}</CardSubtitle>
                <CardText style={{fontStyle:"oblique"}}>{course.description}</CardText>
                <Container>
                    <Button color="danger mx-3" onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color="primary my-3 mx-2" onClick={toggle} style={{ marginBottom: '1rem' }}>Edit</Button>
                    <Collapse isOpen={isOpen}>
                        <Card body inverse style={{ backgroundColor: 'cyan', borderColor: 'cyan' }}>
                        <CardBody>
                        <Form onSubmit={handleForm} >
                        <InputGroup >
                        <InputGroupAddon addonType="prepend">
                        <Input type="text"
                            value={course.id}
                            onChange={(e)=>{
                                setCourse({...course1,id:e.target.value});
                            }}/>
                        <Input type="text"
                            placeholder="Enter Title here"
                            name="title" 
                            id="title"
                            style={{marginTop:3}}
                            onChange={(e)=>{
                                setCourse({...course1,title:e.target.value});
                            }}/>
                        </InputGroupAddon>
                    
                        <Input type="textarea"
                            placeholder="Enter Description here"
                            name="description" 
                            id="description"
                            style={{marginLeft:10}}
                            onChange={(e)=>{
                            setCourse({...course1,description:e.target.value});
                        }}/>
                        </InputGroup>
                <Link style={{display:"none"}} id="viewlink" to="/view-courses"></Link>
                <Container className="text-center" >
                    <Button type="submit" color="warning my-3 ">Update</Button> 
                    <Button color="success my-3 mx-3" type="reset"
                    onClick={()=>{
                        setCourse({});
                    }}>Clear</Button>
                </Container>
            </Form>
           
          </CardBody>
        </Card>
        
      </Collapse>
                </Container>
            </CardBody>
        </Card>
        
    );
}

export default Course;