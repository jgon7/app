
import { CgShoppingCart } from "react-icons/cg";
import { useCartContext } from "../Context/CartContext"


function CartWidget() {

  const {cartList} = useCartContext()
  let suma = parseInt(0);
  let i = parseInt(0);

  for (i in cartList) { 
    suma = parseInt(suma) + parseInt(cartList[parseInt(i)].cantidad)
   }

  const InputCount= ()=> {

    return ( 
    
        <>
             <CgShoppingCart />
             <label style={{ width: 80 }}> {suma} </label>

        </>
         
    )
  }

    return (
      suma !== 0 && <InputCount />


     
    );
  }
  
  export default CartWidget;
  