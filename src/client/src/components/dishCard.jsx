import React, { useEffect, useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import {
  CCard,
  CCardImage,
  CCol,
  CRow,
  CCardBody,
  CCardText,
  CCardTitle,
} from "@coreui/bootstrap-react";
import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";

export default function DishCard(props) {
  const [showUp, setShowPopup] = useState(false);
  const handleClosePopup = () => setShowPopup(false);
  const noteInput = useRef(null);
  const popupContainer = document.querySelector(".popupContainer");
  const setNote = () => {
    noteInput.current.focus();
    console.log(noteInput.current.value);
    props.setDishs((current) => [
      ...current,
      {
        img: props.img,
        title: props.title,
        capt: props.capt,
        price: props.price,
        note: noteInput.current.value,
      },
    ]);
    localStorage.setItem(
      "dishNote",
      JSON.stringify({
        dishName: props.title,
        note: noteInput.current.value,
      })
    );
    setShowPopup(false);
  };
  return (
    <CCard className="mb-3" id={props.id}>
      <CRow className="g-0">
        <CCol className="dishImg">
          <CCardImage src={props.img} />
        </CCol>
        <CCol className="dishMain">
          <CCardBody>
            <CCardTitle
              style={{
                color: "#000",
                marginTop: "0 !important",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              {props.title}
            </CCardTitle>
            <CCardText>{props.capt}</CCardText>
            <CCardText>
              {" "}
              <medium className="text-medium-emphasis">{props.price}</medium>
            </CCardText>
            <CCardText className="addNote">
              <div
                onClick={() =>
                  props.setDishs((current) => [
                    ...current,
                    {
                      img: props.img,
                      title: props.title,
                      capt: props.capt,
                      price: props.price,
                    },
                  ])
                }
              >
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/plus-math.png"
                  alt="add"
                  className="categoryIcon"
                />
              </div>
              <div>
                <img
                  onClick={() => setShowPopup(true)}
                  src="https://img.icons8.com/material-two-tone/24/000000/note.png"
                  alt="note"
                  className="categoryIcon"
                />

                <div style={{ transform: "none !important" }}>
                  <Modal
                    style={{ transform: "none !important" }}
                    className="popup-content"
                    show={showUp}
                    onHide={handleClosePopup}
                    backdrop="static"
                  >
                    <Modal.Header
                      closeButton
                      style={{ transform: "none !important" }}
                    >
                      <Modal.Title> הערות למנה</Modal.Title>
                    </Modal.Header>

                    <Modal.Body style={{ transform: "none !important" }}>
                      <Form.Control type="note" ref={noteInput} />{" "}
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={setNote}>הוספת מנה</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </CCardText>
          </CCardBody>
        </CCol>
      </CRow>
    </CCard>
  );
}
