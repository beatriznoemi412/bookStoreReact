import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";


function ItemDetailContainer() {
    const [product, setProduct] = useState(null)
  
    useEffect(()=>{
        getProductById('12')
           .then(response =>{
            setProduct(response)
           })
           .catch(error => {
            console.error(error)
           })
    }, [])
    return (
      <Row className="row-cols-lg-1">
      <Col>
    <div className="itemDetailContainer col mb-1 ">
        <ItemDetail {...product}/>
    </div>
    </Col>
       </Row>
  )
}

export default ItemDetailContainer