import { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import ItemCount from "../Item/ItemCount";

function ItemDetail({prod}) {

    const [canti, setCanti] = useState (0);
    const {addToCart, cartList} = useCartContext();
  
   
    const arraycon = cartList.filter(item=> item.id === prod.id);
    
    const onAdd = (cant) => {
        

            if (arraycon.length  === 1) {
                setCanti (parseInt(cant) + parseInt(arraycon[0].cantidad)) ;
                console.log(parseInt(cant) + parseInt(arraycon[0].cantidad))
                console.log("CANT");
                console.log(cant);
                console.log("arraycon.cantidad");
                console.log(arraycon[0].cantidad);
                console.log("canti");
                console.log(canti);
                addToCart( { ...prod, cantidad:  canti} )
            }else{
                addToCart( { ...prod, cantidad: cant} )
          }       
    }
  

    return (
   

      <div className='col-md-4' >

       <div className="card w-70 mt-5" >

        <div className="card-header">
            {prod.title}
        </div> 

        <div className="card-body">
            <label >Categoría: {prod.categoria}</label><br></br>
            <img src={prod.picture} alt='' className='w-50' /><br></br>
            <label style={{  width: 100 }}>$U {prod.price}</label>
        </div>
       </div> 
       < ItemCount  stock={10}  initial={0} onAdd={onAdd} />
      </div> 
    
          );
        }
        
        export default ItemDetail;
 