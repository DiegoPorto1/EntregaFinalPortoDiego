import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink, Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = () => {
  const { cart, clearCart} = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let calculatedTotal = 0;
    cart.forEach(item => {
      console.log(item.subtotal);
      calculatedTotal += item.subtotal;
    });
    setTotal(calculatedTotal);
    console.log(total)
  }, [cart]);

  if (total === 0) {
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
            subtotal={p.subtotal}
            {...p}
          />
        ))}
      </div>
      <div>
        <h3>Total: ${total}</h3>
        <button onClick={() => clearCart()}>Limpiar carrito</button>
      </div>
    </div>
  );
}

export default Cart;