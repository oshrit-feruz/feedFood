import Button from "@mui/material/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  textValidate,
  numValidate,
  textNumberValidate,
  emailValidate,
} from "react-validations-components";

function SignUpFunc(props) {
  const existEmailInput = useRef(null);
  const existPasswordInput = useRef(null);
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const cityInput = useRef(null);
  const streetInput = useRef(null);
  const phoneNumberInput = useRef(null);
  const [showUp, setShowSignUp] = useState(false);
  const [showIn, setShowSignIn] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
    street: "",
    phoneNumber: null,
  });
  const [existUser, setExistUser] = useState({
    email: "",
    password: "",
  });
  const signIn = () => {
    existEmailInput.current.focus();
    existPasswordInput.current.focus();
    if (
      emailValidate(existEmailInput.current.value).status &
      (existEmailInput.current.value !== "")
    ) {
      if (
        textNumberValidate(existPasswordInput.current.value).status &
        (existPasswordInput.current.value !== "")
      ) {
        setExistUser({
          email: existEmailInput.current.value,
          password: existPasswordInput.current.value,
        });
      } else alert("סיסמא לא תקינה - אנא מלא את הסיסמא עם מספרים ואותיות");
    } else {
      alert("אימייל לא תקין- אנא הכנס אימייל תקין");
    }
  };
  useEffect(() => {
    if (existUser.password !== "") {
      axios
        .post("/checkUser", existUser)
        .then((res) => {
          console.log(res.data);
          if (res.data == "") {
            alert("האימייל או הסיסמה לא נכונים- אנא נסה שוב");
          } else {
            console.log("first");
            props.setUser(res.data);
            handleCloseSignIn();
          }
        })
        .catch((err) => alert("הכניסה נכשלה- אנא נסה שוב "));
    }
  }, [existUser]);

  const signUp = () => {
    nameInput.current.focus();
    emailInput.current.focus();
    passwordInput.current.focus();
    cityInput.current.focus();
    streetInput.current.focus();
    phoneNumberInput.current.focus();
    if (nameInput.current.value !== "") {
      if (
        emailValidate(emailInput.current.value).status &
        (emailInput.current.value !== "")
      ) {
        if (
          textNumberValidate(passwordInput.current.value).status &
          (passwordInput.current.value !== "")
        ) {
          if (cityInput.current.value !== "") {
            if (streetInput.current.value !== "") {
              if (
                numValidate(phoneNumberInput.current.value).status &
                (phoneNumberInput.current.value !== null) &
                (phoneNumberInput.current.value.length === 10)
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
  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);
  const handleCloseSignIn = () => setShowSignIn(false);
  const handleShowSignIn = () => setShowSignIn(true);

  useEffect(() => {
    if (newUser.phoneNumber !== null) {
      axios
        .post("/insertUser", newUser)
        .then((res) => handleCloseSignUp())
        .catch((err) => alert("ההרשמה נכשלה- אנא נסה שוב"));
    }
  }, [newUser]);

  return (
    <>
      <Button
        id="btn"
        variant="contained"
        color="inherit"
        onClick={handleShowSignUp}
      >
        להרשמה{" "}
      </Button>
      <Button
        id="btn"
        variant="outlined"
        color="inherit"
        onClick={handleShowSignIn}
      >
        היכנס{" "}
      </Button>

      <Modal
        show={showUp}
        onHide={handleCloseSignUp}
        backdrop="static"
        keyboard={false}
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title> הרשמה ל FeedFood</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group className="mb-2" controlId="form">
              <Form.Label>שם מלא</Form.Label>
              <Form.Control
                onKeyDown={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
                onFocus={(e) => e.stopPropagation()}
                onMouseOver={(e) => e.stopPropagation()}
                type="text"
                placeholder="הכנס שם פרטי ומשפחה"
                ref={nameInput}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>כתובת מייל</Form.Label>
              <Form.Control
                type="email"
                placeholder="הכנס מייל"
                ref={emailInput}
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>סיסמא</Form.Label>
              <Form.Control
                type="password"
                placeholder="הכנס סיסמא- אותיות ומספרים"
                ref={passwordInput}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="form">
              <Form.Label>עיר </Form.Label>
              <Form.Control
                type="City"
                ref={cityInput}
                onKeyDown={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
                onFocus={(e) => e.stopPropagation()}
                onMouseOver={(e) => e.stopPropagation()}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="form">
              <Form.Label>רחוב</Form.Label>
              <Form.Control
                type="street"
                ref={streetInput}
                onKeyDown={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
                onFocus={(e) => e.stopPropagation()}
                onMouseOver={(e) => e.stopPropagation()}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="form">
              <Form.Label>מספר טלפון</Form.Label>
              <Form.Control
                type="phone"
                placeholder="מספר טלפון ללא מקף"
                ref={phoneNumberInput}
              />
            </Form.Group>
            <Button variant="outlined" type="button" onClick={signUp}>
              הירשם
            </Button>
          </Modal.Body>
        </Form>
      </Modal>
      <Modal
        show={showIn}
        onHide={handleCloseSignIn}
        backdrop="static"
        keyboard={false}
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title> כניסה ל FeedFood</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>כתובת מייל</Form.Label>
              <Form.Control
                type="email"
                placeholder="הכנס מייל"
                ref={existEmailInput}
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>סיסמא</Form.Label>
              <Form.Control
                type="password"
                placeholder="הכנס סיסמא"
                ref={existPasswordInput}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={signIn}>
              היכנס
            </Button>
          </Modal.Body>
        </Form>
      </Modal>
    </>
  );
}

export default SignUpFunc;
