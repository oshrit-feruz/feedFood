import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React, { useState, useRef } from "react";
import axios from "axios";

function SignUpFunc() {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const cityInput = useRef(null);
  const streetInput = useRef(null);
  const phoneNumberInput = useRef(null);
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    city: "",
    street: "",
    phoneNumber: "",
  });
  const signUp = () => {
    emailInput.current.focus();
    passwordInput.current.focus();
    cityInput.current.focus();
    streetInput.current.focus();
    phoneNumberInput.current.focus();
    setNewUser({
      email: emailInput.current.value,
      password: passwordInput.current.value,
      city: cityInput.current.value,
      street: streetInput.current.value,
      phoneNumber: phoneNumberInput.current.value,
    });
    axios.post('/insertUser', newUser).then((res) => alert(res)).catch((err)=>alert('failed to sign up- please try again'))
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                ref={passwordInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form">
              <Form.Label>City </Form.Label>
              <Form.Control
                type="City"
                placeholder="Enter city"
                ref={cityInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form">
              <Form.Label>Street</Form.Label>
              <Form.Control
                type="street"
                placeholder="Enter street"
                ref={streetInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Enter phone number"
                ref={phoneNumberInput}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={signUp}>
              Submit
            </Button>
          </Modal.Body>
        </Form>
      </Modal>
    </>
  );
}

export default SignUpFunc;
