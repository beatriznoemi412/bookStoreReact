import "./Item.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Item({title, author, price, category, img, stock, description}) {
  try {
    return (
      
        <Card className="card bg-warning mt-5" style={{ width: '18rem' }}>
          <Card.Img variant="top" src= {img} className="img"/>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <div>
                <p>Autor: {author}</p>
              </div>
              <div>
                <p>Precio: {price}</p>
              </div>
              <div>
                <p>Categoría: {category}</p>
              </div>
              <div>
                <p>Stock: {stock}</p>
              </div>
              <div>
                <p>Descripción: {description}</p>
              </div>
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      
    );
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default Item