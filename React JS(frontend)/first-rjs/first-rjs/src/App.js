import React from "react";
//import logo from './logo.svg';
import './App.css';
import { Col, Container, Row } from "reactstrap";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import Header from "./components/header";
import Menus from "./components/Menus";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login_logout from "./components/login_logout";

function App() {

  

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header/>
          <Login_logout/>
          <Row>
            <Col md={4}>
              <Menus/>
            </Col>
            <Col md={8}>
              <Route path="/" component={Home} exact />
              <Route path="/add-course" component={AddCourse} exact />
              <Route path="/view-courses" component={AllCourses} exact />
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
    
  );
}

export default App;
