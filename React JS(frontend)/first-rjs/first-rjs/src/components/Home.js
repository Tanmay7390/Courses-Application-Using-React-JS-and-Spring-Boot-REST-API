import React,{useEffect} from "react";
import { Jumbotron} from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";

const Home = ()=>{

    useEffect(()=>{
        document.title="Courses Application";
    });

    useEffect(()=>{
        getName();
    },[]);

    const getName=()=>{
        axios.get(`${base_url}/getname`).then(
        (response)=>{
            if(response.data==="")
            {
                document.getElementById("name").innerHTML="Hello Friends";
            }else{
                document.getElementById("name").innerHTML="Hello "+response.data;
            }
        })
    };

    return(
        <div>
            <Jumbotron className="text-center" id="login_div">
                <h1 className="display-5" style={{marginTop:50}} id="name"></h1>
                <p>In this Application you login and create courses here and
                    <br/> view all of them any this you visit/login again</p>
            </Jumbotron>
        </div>
    );
}


export default Home;