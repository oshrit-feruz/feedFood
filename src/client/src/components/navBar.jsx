// import init from "./rff";
// import "../App.css";
// import axios from "axios";
// import Home from "../routes/home";
// import LargeCarousel from "../components/largeCarousel";
import logo from "../images/logo.jpg";
// import Button from "@mui/material/Button";
import SignUpFunc from "../components/signUpForm";
import Formik from "../components/locationSearch";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
// function NavBar() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-white bg-white">

//         <Formik />
//         <div>
//         <SignUpFunc />
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavBar;
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState ,useEffect} from "react";

function NavBar() {
  const [user,setUser]=useState(null)
  useEffect(() => {
    
  console.log(user)
  }, [user])
  
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/home">
            <img className="logo" src={logo} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* {if (condition) {
              
            }} */}
            <Nav.Link>
              <Formik />
            </Nav.Link>
            <Nav.Link>
              <SignUpFunc setUser={setUser}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
