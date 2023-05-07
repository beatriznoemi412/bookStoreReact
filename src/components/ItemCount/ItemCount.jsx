
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) =>{
  const [amount, setAmount] = useState(initial);

  const addOne = () => {
    amount < stock? setAmount(amount + 1): null;
    
  };

  const subtract = () => {
    amount > 1?  setAmount(amount - 1): null; 
  };

  return (
    <div>
    <div>
      <button onClick={addOne}>+</button>
      <h1>{amount}</h1>
      <button onClick={subtract}>-</button>
    </div>
    <div>
      <button className="btn" onClick={()=> onAdd(amount)} disabled={!stock}>
        Agregar Carrito
      </button>
    </div>
    </div>
  );
}
export default ItemCount;