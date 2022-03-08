import { useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";


function ItemCount({ stock, initial}) {

  let inicial = parseInt(initial);

  if (inicial > parseInt(stock)) {
    inicial = parseInt(stock);
  }

  const [count, setCount] = useState (inicial);

  const handleCountPlas = () => {
    if (count < parseInt(stock))  {
        if (parseInt(stock) !== 0) {
            setCount (count + 1)
        }
    } 
 }

   const handleCount = () => { 
    if (count > inicial) {
        
        setCount (count - 1)
        
    }
 }

 const handleCountFinal = () => { 
    
    if (parseInt(stock) !== 0) {

        if (count === 0) {
            console.log("No se agregó item por ingresar cantidad 0") 
        } else {

       if (count <= parseInt(stock)){
        console.log("Cantidad de Items elegidos : " + count)
        } }
         
    } else {
        console.log("No hay Stock de este Item")        
    }
   
  
    
 }

  return (
   

<Card>
                   
<Card.Body>
  <Button variant="light" onClick={handleCount} style={{ 
        width: 40, backgroundColor:  "#f4efef"
   }}>-</Button> 
  <label style={{  width: 50 }}>{count}</label> 
  <Button variant="light" onClick={handleCountPlas} style={{  width: 40, backgroundColor:  "#f4efef"}}>+</Button> <br /> <br />
  <Button variant="light" style={{ backgroundColor: "#f4efef"
   }} onClick={handleCountFinal}  >Agregar al Carrito</Button>
 

</Card.Body>
</Card>


  );
}

export default ItemCount;