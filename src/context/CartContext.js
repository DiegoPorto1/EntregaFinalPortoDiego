import {createContext, useState, useEffect} from "react"

export const CartContext = createContext ({
    cart: []
})


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState ([])
    console.log (cart )


    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        let quantity = 0;
        cart.forEach((item) => {
          quantity += item.quantity;
        });
        setTotalQuantity(quantity);
      }, [cart]);
    
    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart (prev => [...prev, {...item,quantity}]);
        } else {
            console.error ('El producto ya fue agregado')
        }
    }
    
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter (prod => prod.id !== itemId)
        setCart (cartUpdated)
    }

    const clearCart =() => {
        setCart ([])
    }
    

    const isInCart = (itemId) => {
        return cart.some (prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{cart , addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )

}