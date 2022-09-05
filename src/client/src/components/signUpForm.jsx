import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React, { useState, useRef } from "react";
import axios from "axios";
import {
  textValidate,
  numValidate,
  textNumberValidate,
  emailValidate,
} from "react-validations-components";

function SignUpFunc() {
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const cityInput = useRef(null);
  const streetInput = useRef(null);
  const phoneNumberInput = useRef(null);
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
    street: "",
    phoneNumber: null,
  });
  const signUp = () => {
    nameInput.current.focus();
    emailInput.current.focus();
    passwordInput.current.focus();
    cityInput.current.focus();
    streetInput.current.focus();
    phoneNumberInput.current.focus();

    if (textValidate(nameInput.current.value).status) {
      console.log(textValidate(nameInput.current.value));

      if (emailValidate(emailInput.current.value).status) {
        if (textNumberValidate(passwordInput.current.value).status) {
          if (textValidate(cityInput.current.value).status) {
            if (textNumberValidate(streetInput.current.value).status) {
              if (numValidate(phoneNumberInput.current.value).status) {
                setNewUser({
                  name: nameInput.current.value,
                  password: passwordInput.current.value,
                  phoneNumber: Number(phoneNumberInput.current.value),
                  email: emailInput.current.value,
                  city: cityInput.current.value,
                  street: streetInput.current.value,
                });
                console.log(newUser);
                axios
                  .post("http://localhost:3002/insertUser", newUser)
                  .then((res) => alert(res.data.response))
                  .catch((err) => alert("failed to sign up- please try again"));
                console.log("sign up succsesfully");
              } else
                alert(
                  "invalid phone number - please enter just number attached"
                );
            } else
              alert("invalid street - please enter the street name and number");
          } else alert("invalid city - please check your input");
        } else alert("invalid password - please enter letters and numbers");
      } else {
        alert("invalid email - please check your input");
      }
    } else {
      alert("invalid name - please check your input");
    }
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
            <Form.Group className="mb-3" controlId="form">
              <Form.Label>name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter your name"
                ref={nameInput}
              />
            </Form.Group>
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
