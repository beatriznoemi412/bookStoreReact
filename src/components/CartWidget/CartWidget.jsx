import "./cartWidget.css";
import cart  from "./assets/cart.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalAmount } = useContext(CartContext);
  
  return (
      <div className="cart" >
      <Link to="/cart" style={{display: totalAmount > 0 ? "block" : "none"}}>
      <img src= {cart} alt="cartWidget" />
      { totalAmount }
      </Link>
      </div>

  )
}
export default CartWidget;
