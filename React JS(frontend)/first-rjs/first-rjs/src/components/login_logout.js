import React,{useState,useEffect} from "react";
import {Container,Button ,Modal, ModalBody, ModalFooter,Input} from "reactstrap";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import base_url from "../api/bootapi";
import axios from "axios";
import {right } from "@popperjs/core";

const Login_logout = (props)=>{
    const {
        className
    } = props;
   
    useEffect(()=>{
        getId();
    },[]);

    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    const [modal1, setModal1] = useState(false);
    
    const toggle1 = () => setModal1(!modal1);

    const [login,setLogin]=useState([]);

    const [login1,setLogin1]=useState([]);

    const getAllloginFromServer=(name,pass)=>{
        axios.get(`${base_url}/loginbyname/${name},${pass}`).then(
            (response)=>{
                if(response.data!=0)
                {
                    toggle1();
                    document.getElementById("login_div").style.display="none";
                    document.getElementById("logout_div").style.display="block";
                    document.getElementById("addlink").click();
                    document.getElementById("homelink").click();
                    toast.info("Login Succesfull");
                }else{
                    toast.error("Wrong details");
                }
            },
            (error)=>{
                toast.error("Something went wrong");
            })
    };

    const postdatatoServer=(data)=>{
        axios.post(`${base_url}/login`,data).then(
            (response)=>{
                    toggle();
                    document.getElementById("login_div").style.display="none";
                    document.getElementById("logout_div").style.display="block";
                    document.getElementById("addlink").click();
                    document.getElementById("homelink").click();
                    toast.info("New User Created");
            })
    };

    const donelogin=(e)=>{
        getAllloginFromServer(login.username,login.password);
        e.preventDefault();
    };

    const getId=(e)=>{
        axios.get(`${base_url}/getloginmaxid`).then(
        (response)=>{
            login1.id = response.data+1;
        })
    };

    const doneaccount=(e)=>{
        postdatatoServer(login1);
        e.preventDefault();
        
    };

    return(
        <div style={{textAlign:right}}>
            <Container id="login_div">
                    <Button color="primary" onClick={toggle1} >Login Here</Button>
                    <Modal isOpen={modal1} toggle={toggle1} className={className}>
                        <h3 className="text-center mt-3" style={{fontStyle:"oblique"}}>Login Details</h3>
                            <ModalBody>
                                <Input type="text" placeholder="Enter Username" id="name" 
                                onChange={(e)=>{
                                    setLogin({...login,username:e.target.value});
                                }}/>
                                <Input type="password" id="pass" style={{marginTop:10}} placeholder="Enter Password"
                                onChange={(e)=>{
                                    setLogin({...login,password:e.target.value});
                                }}/>
                            </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={donelogin}>Login</Button>{' '}
                            <Button color="secondary" onClick={toggle1}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    <Button color="info" onClick={toggle} style={{marginLeft:15}} >Create Account</Button>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                        <h3 className="text-center mt-3" style={{fontStyle:"oblique"}}>New User Details</h3>
                            <ModalBody>
                                <Input type="text" placeholder="Create Username" 
                                onChange={(e)=>{
                                    setLogin1({...login1,username:e.target.value});
                                }}/>
                                <Input type="password" style={{marginTop:10}} placeholder="Create Password"
                                onChange={(e)=>{
                                    setLogin1({...login1,password:e.target.value});
                                }}/>
                            </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={doneaccount}>Create</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
            </Container>
            <Container id="logout_div" style={{display:"none"}}>
                <Button color="danger" onClick={()=>{
                    document.getElementById("logout_div").style.display="none";
                    document.getElementById("login_div").style.display="block";
                    login.username="";
                    login.password="";
                    axios.get(`${base_url}/nullvalue`).then()
                    document.getElementById("addlink").click();
                    document.getElementById("homelink").click();
                }}>Logout</Button>
                <Link style={{display:"none"}} id="addlink" to="/add-course"></Link>
                <Link style={{display:"none"}} id="homelink" to="/"></Link>
            </Container>
        </div>   
    );
}
export default Login_logout;