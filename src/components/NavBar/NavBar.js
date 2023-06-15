import CartWidget from "../CartWidget/CartWidget";
import './navBar.css'
import { NavLink,Link } from "react-router-dom";


const NavBar = () => {

    return (
        <div>
        <nav>
        <NavLink to=  {`/`}>Ecommerce</NavLink>
        <div className="botones">
        <NavLink to=  {`/category/hamburguesa`}>Hamburguesas</NavLink>
        <NavLink to=  {`/category/bebida`}>Bebidas</NavLink>
        <NavLink to=  {`/category/cerveza`}>Cervezas</NavLink>
        </div>
        <CartWidget/>
        </nav>
        </div>
    )
}
export default NavBar;