import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink, Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = () => {
  const { cart, clearCart, total,quantityTotal } = useContext(CartContext);
 

 

  if (quantityTotal() === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to='/'>Productos</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="Cart">
        {cart.map(p => (
          <CartItem
            key={p.id}
            itemId={p.id}
            quantity={p.quantity}
            price={p.price}
            name={p.name}
            {...p}
          />
        ))}
      </div>
      <div>
        <h3>Total: ${total()}</h3>
        <button onClick={() => clearCart()}>Limpiar carrito</button>
      </div>
    </div>
  );
}

export default Cart;