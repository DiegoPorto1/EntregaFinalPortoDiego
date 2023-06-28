import cart from './assets/cart.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { quantityTotal } = useContext(CartContext)
   
    if (quantityTotal() === 0) {
        return (
          <div>
            <Link to='/cart'  > 
            
        
                <img src={cart} alt="cart-widget"/> 

            </Link>
          </div>
        );
      }
    return (
        <div>
            <Link to='/cart'  > 
            {quantityTotal()}
        
                <img src={cart} alt="cart-widget"/> 

            </Link>
        </div>
    )
}

export default CartWidget