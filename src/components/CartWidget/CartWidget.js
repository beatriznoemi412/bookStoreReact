import cart from "./assets/cart.svg";
import "./CartWidget.css";
const CartWidget = () => {
  return (
    <div className="carrito">
      <img src={cart} alt="cart"/>
      0
    </div>
  )
}

export default CartWidget