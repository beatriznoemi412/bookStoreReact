import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "../cartItem/cartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalAmount, total } = useContext(CartContext);
    
    if(totalAmount === 0) {
        return (
            <div>
                <h1>No hay libros en carrito</h1>
                <Link to="/" className="option">BOOKSTORE</Link>
            </div>
        )
    }
    return(
        <div>
            {cart.map(prod => <CartItem key={prod.id}{...prod}/>)}
            <h3>Total:$ {total}</h3>
            <button onClick={() => clearCart()} className="button">Limpiar Carrito</button>
            <Link to="/checkout" className="option">Checkout</Link>
        </div>
    )
    
}
export default Cart;