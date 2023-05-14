import "./itemDetail.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemCount from "../itemCount/itemCount";

const ItemDetail = ({
  title,
  author,
  price,
  category,
  img,
  stock,
  description,
}) => {
  return (
    <Card
      className="card bg-warning mt-5"
      id="cardTwelve"
      style={{ width: "25rem", height: "56rem" }}
    >
      <Card.Img variant="top" src={img} className="img" id="img" />
      <Card.Body className="item-actions">
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Text className="text-center">
          <div>Autor: {author}</div>
          <div>Precio: {price}</div>
          <div>Categoría: {category}</div>
          <div>Stock: {stock}</div>
          <div>Descripción: {description}</div>
        </Card.Text>

        <Button variant="primary">Comprar</Button>
        <ItemCount
          initial={1}
          stock={15}
          onAdd={(amount) => console.log("Cantidad", amount)}
        />
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
