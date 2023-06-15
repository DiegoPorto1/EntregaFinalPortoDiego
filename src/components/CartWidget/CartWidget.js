import cart from './assets/cart.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {
    const {totalQuantity} = useContext (CartContext)


    return (
        <div>
            <Link to='/cart' style={{display: totalQuantity > 0 ? 'block' : 'none'}}> 
            <img src={cart} alt="cart-widget"/> 
            {totalQuantity}
            </Link>
              
        </div>
    )
}

export default CartWidget