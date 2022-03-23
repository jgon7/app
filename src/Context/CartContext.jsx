import { createContext, useContext, useState} from "react";

const CartContext = createContext([])

export const useCartContext =  () => useContext(CartContext)

function CartContextProvider({children}) {

    const [cartList, setCartList ] = useState([]);

    const addToCart = (item) => {
        
        const arraysin = cartList.filter(i=> i.id !== item.id);
        const arraycon = cartList.filter(i=> i.id === item.id);

        if (arraycon.length  === 1) {
            setCartList( [...arraysin, item])
        }else{
            setCartList( [...cartList, item])
      }

        
    }

    const vaciarCart = () => {
        setCartList( [])
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, vaciarCart}}>

        {children}

        </CartContext.Provider>
    )
}

export default CartContextProvider