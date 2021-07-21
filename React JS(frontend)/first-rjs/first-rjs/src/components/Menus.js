import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

const Menus=()=>{

    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action"
            style={{backgroundColor:"lightcyan"} }
             tag="a"
             to="/" 
             id="l1"
             action>Home
            </Link>

            <Link className="list-group-item list-group-item-action"
             tag="a"
             style={{backgroundColor:"lightcyan"}}
             to="/add-course" 
             id="l2"
             action>Add Courses
            </Link>

            <Link className="list-group-item list-group-item-action"
             tag="a"
             style={{backgroundColor:"lightcyan"}}
             to="/view-courses"
             id="l3"
             action>View Courses
            </Link>

            <Link className="list-group-item list-group-item-action"
             tag="a"
             to="#!"
             id="l4"
             style={{backgroundColor:"lightcyan"}}
             action>About
            </Link>

            <Link className="list-group-item list-group-item-action"
             tag="a"
             to="#!"
             id="l5"
             style={{backgroundColor:"lightcyan"}}
             action>Contacts
             </Link>

        </ListGroup>
    );
}
export default Menus;