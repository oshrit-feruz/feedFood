import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function RestaurantCard(props) {
  return (
    <Card >
      <Link
        to="/restaurant"
        state={{
          restaurantName: props.title,
        }}
      >
        <Card.Img variant="top" src={props.img} />
      </Link>
        <Card.Body>
        <Link
        to="/restaurant"
        state={{
          restaurantName: props.title,
        }}
      >
          <Card.Title>{props.title}</Card.Title></Link>
          <Card.Text className="tags">{props.capt}</Card.Text>
          <Button variant="solid" disabled>
            20-30 min
          </Button>{" "}
          <div className="cardFooter">
            {Math.floor(Math.random() * 30 + 20)}{" "}
          </div>
        </Card.Body>
    </Card>
  );
}
