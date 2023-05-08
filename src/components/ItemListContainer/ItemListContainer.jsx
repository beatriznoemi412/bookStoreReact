
import { useState, useEffect} from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({greeting}) => {
  const banner = {//declarando los estilos como un objeto
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "84vh",
    backgroundImage:`url(${"https://cdn.pixabay.com/photo/2018/04/16/09/30/literature-3324023_1280.jpg"})`
  }
  const bannerContainer ={
    textAlign: "center",
    padding: "15% 0",
    color: "white",
    textShadow: "1 px 1px 3px rgba(0,0,0,0.2)",
    fontSize: "2rem",
    fontFamily: "'EB Garamond', serif"
  }
  const itemsList ={
  }
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    getProducts()
    .then(response =>{
      setProducts(response)
    })
    .catch(error =>{
      console.error(error)
    })
  })
  return (
    <>
    <div className="banner" style={banner}>
      <div className="bannerContainer" style={bannerContainer}>
        {greeting}
        </div>
        <br />
        <br />
        <div className="items" style ={itemsList}>
      <ItemList products={products}/>
      </div>
    </div>
    </>
    
  )
}

export default ItemListContainer


