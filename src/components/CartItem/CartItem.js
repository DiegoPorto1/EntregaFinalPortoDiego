import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ quantity, price, name, subtotal, itemId }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItem(itemId);
  };

  return (
    <div>
      <h4>{name}</h4>
      <p>Cantidad: {quantity}</p>
      <p>Valor: ${price}</p>
      <p>Subtotal: ${subtotal}</p>
      <button onClick={handleRemoveItem}>Eliminar</button>
    </div>
  );
};

export default CartItem;