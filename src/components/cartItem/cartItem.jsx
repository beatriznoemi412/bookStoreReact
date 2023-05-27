

const CartItem = ({ title, img, price, amount }) => {
  return (
    <div className="cart-item">
      <h3>{title}</h3>
      <img src={img} alt={title} />
      <p>Precio: $ {price}</p>
      <p>Cantidad: {amount}</p>
    </div>
  );
};

export default CartItem;
