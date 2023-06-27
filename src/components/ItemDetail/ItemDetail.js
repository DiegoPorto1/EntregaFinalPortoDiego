import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, name, img,category,description,price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext);
   
    const handledOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        const item = { id, name, img, category, price };
        addItem(item, quantity);
    }
    
    
    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripcion: {description}
                </p>
                <p>
                    Precio: $ {price}
                </p>
            </section>
            <footer>
               {
                quantityAdded > 0 ? (
                    <Link to='/cart' className='Option'>Terminar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handledOnAdd}/>
                )
               }
            </footer>
        </article>
    )

}

export default ItemDetail