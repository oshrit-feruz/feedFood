import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function RestaurantCard(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Link
          style={{ textDecoration: "none", color: 'black'}}
          to="/restaurant"
          state={{
            restaurantName: props.title,
            type: props.type,
          }}
        >
          <Card.Title>{props.title}</Card.Title>
        </Link>
        <Card.Text className="tags">{props.capt}</Card.Text>
        <div className="cardFooter">{Math.floor(Math.random() * 30 + 20)}₪🚴‍♂️ </div>
      </Card.Body>
    </Card>
  );
}
