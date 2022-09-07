// import Button from "react-bootstrap/Button";
import Button from "@mui/material/Button";
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

    if (textValidate(nameInput.current.value).status & (newUser.name !== "")) {
      if (
        emailValidate(emailInput.current.value).status &
        (newUser.email !== "")
      ) {
        if (
          textNumberValidate(passwordInput.current.value).status &
          (newUser.password !== "")
        ) {
          if (
            textValidate(cityInput.current.value).status &
            (newUser.city !== "")
          ) {
            if (
              textNumberValidate(streetInput.current.value).status &
              (newUser.street !== "")
            ) {
              if (
                numValidate(phoneNumberInput.current.value).status &
                (newUser.phoneNumber !== null)
              ) {
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
                  .then((res) => alert(res.data.response), handleClose())
                  .catch((err) => alert("ההרשמה נכשלה- אנא נסה שוב"));
              } else alert("מספר טלפון לא תקין- אנא הכנס רק מספרים");
            } else alert("שם רחוב לא תקין- אנא הכנס את שם הרחוב והמספר");
          } else alert("שם העיר אינו תקין- אנא הכנס עיר");
        } else alert("סיסמא לא תקינה - אנא מלא את הסיסמא עם מספרים ואותיות");
      } else {
        alert("אימייל לא תקין- אנא הכנס אימייל תקין");
      }
    } else {
      alert("שם לא תקין- אנא תקן את שמך ללא מספרים");
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button id="btn" variant="contained" color="inherit" onClick={handleShow}>
        להרשמה{" "}
      </Button>
      <Button id="btn" variant="outlined" color="inherit">
        היכנס{" "}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Form>
          <Modal.Header closeButton >
            <Modal.Title> הרשמה ל FoodFeed</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group className="mb-3" controlId="form">
              <Form.Label>שם מלא</Form.Label>
              <Form.Control
                type="name"
                placeholder="הכנס שם פרטי ומשפחה"
                ref={nameInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>כתובת מייל</Form.Label>
              <Form.Control
                type="email"
                placeholder="הכנס מייל"
                ref={emailInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>סיסמא</Form.Label>
              <Form.Control
                type="password"
                placeholder="הכנס סיסמא- אותיות ומספרים"
                ref={passwordInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form">
              <Form.Label>עיר </Form.Label>
              <Form.Control
                type="City"
                // placeholder="Enter city"
                ref={cityInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form">
              <Form.Label>רחוב</Form.Label>
              <Form.Control
                type="street"
                // placeholder="Enter street"
                ref={streetInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form">
              <Form.Label>מספר טלפון</Form.Label>
              <Form.Control
                type="phone"
                placeholder="מספר טלפון ללא מקף"
                ref={phoneNumberInput}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={signUp}>
              הירשם
            </Button>
          </Modal.Body>
        </Form>
      </Modal>
    </>
  );
}

export default SignUpFunc;
