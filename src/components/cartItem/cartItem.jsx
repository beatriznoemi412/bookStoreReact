

const CartItem = ({ title, img, price, amount }) => {
  return (
    <div className="cartItem">
      <h3>{title}</h3>
      <img className="selectedProd" src={img} alt={title} />
      <p>Precio: $ {price}</p>
      <p>Cantidad: {amount}</p>
     
    </div>
  );
};

export default CartItem;
