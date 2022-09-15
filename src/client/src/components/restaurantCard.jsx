import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function RestaurantCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      {/* <Link
        to="/restaurant"
        state={{
          restaurantName: props.title,
        }}
      > */}
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="tags">{props.capt}</Card.Text>
          <Button variant="solid" disabled>
            20-30 min
          </Button>{" "}
          <div className="cardFooter">
            {Math.floor(Math.random() * 30 + 20)}{" "}
          </div>
        </Card.Body>
      {/* </Link> */}
    </Card>
  );
}
