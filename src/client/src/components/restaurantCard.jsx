import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function RestaurantCard(props) {
  return (
    <Card>
      <div className="inCard">
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          {props.price ? (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/restaurant"
              state={{
                restaurantName: props.title,
                type: props.type,
              }}
            >
              <div className="cardMedium">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text className="tags">{props.capt}</Card.Text>
              </div>
            </Link>
          ) : (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/category"
              state={{
                chossenCategory:props.title,
              }}
            >
              <div className="cardMedium">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text className="tags">{props.capt}</Card.Text>
              </div>
            </Link>
          )}
          {props.price ? (
            <div className="cardFooter">
              {Math.floor(Math.random() * 30 + 20)}₪🚴‍♂️{" "}
            </div>
          ) : (
            <></>
          )}
        </Card.Body>
      </div>
    </Card>
  );
}
