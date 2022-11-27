import logo from "../images/logo.jpg";
import Modal from "react-bootstrap/Modal";
import SignUpFunc from "../components/signUpForm";
import Badge from "@material-ui/core/Badge";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import {
  CCard,
  CCardImage,
  CCol,
  CRow,
  CCardBody,
  CCardText,
  CCardTitle,
} from "@coreui/bootstrap-react";
function NavBar(props) {
  const [user, setUser] = useState(null);
  const [showUp, setShowOrder] = useState(false);
  const handleCloseOrder = () => setShowOrder(false);
  useEffect(() => {
    props.orderList.length = 0;
  }, []);

  useEffect(() => {}, [user, props.orderList]);

  const noteInput = useRef(null);
  const handleLogOut = () => setUser(null);

  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
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
            <Badge color="secondary" badgeContent={props.orderList.length}>
            <ShoppingCartIcon />{" "}
          </Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {props.orderList.length === 0 ? (
                <div id="emptyImgText">
                  <img
                    id="img-empty"
                    src="https://store.r2graphics.com/content/images/empty-cart.png"
                    alt="empty-cart"
                  />
                  <h6>Your cart is empty!</h6>
                </div>
              ) : (
                props.orderList.map((dish) => (
                  <>
                    <CCard  style={{ width: "80vw" }}>
                      <CRow  style={{ width: "80vw" }}>
                        <CCol >
                          <CCardImage
                            src={dish.img}
                            style={{ padding: "11px", width: "132px" }}
                          />
                        </CCol>
                        <CCol >
                          <CCardBody>
                            <CCardTitle>{dish.title}</CCardTitle>
                            <CCardText>{dish.capt}</CCardText>
                            <CCardText>
                              <small className="text-medium-emphasis">
                                {dish.note}
                              </small>
                              <small className="text-medium-emphasis">
                                {dish.price}
                              </small>
                            </CCardText>
                          </CCardBody>
                        </CCol>
                      </CRow>
                    </CCard>
                    <div>
                      <div>
                        <Modal
                          className="orderPopup-content"
                          show={showUp}
                          onHide={handleCloseOrder}
                          backdrop="static"
                        >
                          <Modal.Header closeButton>
                            <Modal.Title> ההזמנה שלך</Modal.Title>
                          </Modal.Header>

                          <Modal.Body>
                            {props.orderList.map((dish) => {
                              return (
                                <>
                                  <CCard
                                    style={{ width: "80vw" }}
                                  >
                                    <CRow
                                      style={{ width:"80vw" }}
                                    >
                                      <CCol md={1}>
                                        <CCardImage
                                          src={dish.img}
                                          style={{
                                            padding: "11px",
                                            width: "132px",
                                          }}
                                        />
                                      </CCol>
                                      <CCol md={2}>
                                        <CCardBody>
                                          <CCardTitle>{dish.title}</CCardTitle>
                                          <CCardText>{dish.capt}</CCardText>
                                          <CCardText>
                                            <small className="text-medium-emphasis">
                                              {dish.note}
                                            </small>
                                            <small className="text-medium-emphasis">
                                              {dish.price}
                                            </small>
                                          </CCardText>
                                        </CCardBody>
                                      </CCol>
                                    </CRow>
                                  </CCard>
                                </>
                              );
                            })}
                          </Modal.Body>
                        </Modal>
                      </div>
                    </div>
                  </>
                ))
              )}
              {props.orderList.length > 0 ? (
                <Button onClick={() => setShowOrder(true)} alt="order">
                  לצפייה בהזמנה
                </Button>
              ) : (
                <></>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
