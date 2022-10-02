import logo from "../images/logo.jpg";
import SignUpFunc from "../components/signUpForm";
import Formik from "../components/locationSearch";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import { BsFillCartFill } from "react-icons/bs";
import LocationSearch from "../components/locationSearch";

function NavBar() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleLogOut = () => setUser(null);
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/home">
            <img className="logo" src={logo} alt="" />
          </Link>
        </Navbar.Brand>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          {user == null ? (
            <>
              <Nav.Link>
                <SignUpFunc setUser={setUser} />
              </Nav.Link>
            </>
          ) : (
            <>
              <Button
                style={{
                  width: "124px",
                  padding: "10px",
                  fontSize: "17px",
                  borderRadius: "9px",
                  margin: "7px",
                  color: "black",
                  backgroundColor: "#d6dfe4",
                }}
                variant="outlined"
                color="inherit"
                disabled
              >
                ברוכים הבאים {user.user_name}
              </Button>{" "}
              <Button
                id="btn"
                variant="contained"
                color="inherit"
                onClick={handleLogOut}
              >
                התנתק{" "}
              </Button>
            </>
          )}
        </Nav>

        <Dropdown>
          <Dropdown.Toggle
            style={{
              width: "48px",
              padding: "10px",
              fontSize: "17px",
              borderRadius: "9px",
              margin: "7px",
              color: "black",
              backgroundColor: "#d6dfe4",
            }}
            variant="outlined"
            color="inherit"
            id="dropdown-basic"
          >
            <BsFillCartFill />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div id="emptyImgText">
              <img
                id="img-empty"
                src="https://store.r2graphics.com/content/images/empty-cart.png"
                alt="empty-cart"
              />
              <h6>Your cart is empty!</h6>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

export default NavBar;
