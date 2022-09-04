import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function RestaurantCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://imageproxy.wolt.com/venue/617a77c400cdc38e4949961d/139e4d1c-37d8-11ec-abad-ea41cff6cda7_54c80656_8ec0_11ea_a95a_0a58646e610f_yaelitz_2.avif?w=960"
      />
      <Card.Body>
        <Card.Title>Burger King</Card.Title>
        <Card.Text className="tags">burgers,meat</Card.Text>
        <Button variant="solid" disabled>
          20-30 min
        </Button>{" "}
        <div className="cardFooter">4$-5$</div>
      </Card.Body>
    </Card>
  );
}

export default RestaurantCard;
