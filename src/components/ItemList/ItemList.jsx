import Item from "../Item/Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ItemList=({products})=> {
  return (
    <Container fluid>
      <Row>
    <div className="ListGroup">
        {products.map(prod =><Item key={prod.id}{...prod}/>)}
    </div>
    </Row>
    </Container>
  )
}

export default ItemList