import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function RestaurantCard(props) {
  return (
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src={props.img} /> */}
        <Card.Body>
          {/* <Card.Title>{props.title}</Card.Title> */}
          {/* <Card.Text className="tags">{props.capt}</Card.Text> */}
          <Button variant="solid" disabled>
            20-30 min
          </Button>{" "}
          <div className="cardFooter">4$-5$</div>
        </Card.Body>
      </Card>
  );
}
