import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import {
  CCard,
  CCardImage,
  CCol,
  CRow,
  CCardBody,
  CCardText,
  CCardTitle,
} from "@coreui/bootstrap-react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";
export default function DishCard(props) {
  let popup
  const popupContainer = document.querySelector(".popupContainer");
    return (
    <CCard className="mb-3" id={props.id}>
      <CRow className="g-0">
        <CCol md={4}>
          <CCardImage src={props.img} />
        </CCol>
        <CCol md={8}>
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
              <div >
                {popup}
                <img
                  src="https://img.icons8.com/material-two-tone/24/000000/note.png"
                  alt="note"
                  className="categoryIcon"
                />
              </div>
            </CCardText>
          </CCardBody>
        </CCol>
      </CRow>
    </CCard>
  );
}
