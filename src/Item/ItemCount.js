import { useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


function ItemCount({ stock, initial, onAdd}) {

  

  let inicial = parseInt(initial);
  if (inicial > parseInt(stock)) {
    inicial = parseInt(stock);
  }

  const [count, setCount] = useState (inicial);
  const [inputType, setInputType ] = useState('button');

  const handleCountPlas = () => {
    if (parseInt(count) < parseInt(stock))  {
        if (parseInt(stock) !== 0) {
            setCount (parseInt(count) + 1)
        }
    } 
 }

   const handleCount = () => { 
    if (parseInt(count) > inicial) {
        
        setCount (parseInt(count) - 1)
        
    }
 }

 const handleCountFinal = () => { 
    
    if (parseInt(stock) !== 0) {

        if (parseInt(count) === 0) {
            console.log("No se agregó item por ingresar cantidad 0") 
        } else {

       if (parseInt(count) <= parseInt(stock)){
        console.log("Cantidad de Items elegidos : " + parseInt(count))
        } 
        setInputType('input')
        onAdd( count )
      }
         
    } else {
        console.log("No hay Stock de este Item")        
    }
   
  
    
 }

 const InputCount= ()=> {

  return (
    <Card>      
      <Card.Body>
        <Link to='/cart' >
          <button className="btn btn-outline-primary" onClick={()=>console.log('ir a cart') } >Ir al Carrito</button>
        </Link>
      </Card.Body>
    </Card>
  )
}



const ButtonCount= ()=> {

  return(
      <Card>
                   
                   <Card.Body>
                     <Button variant="light" onClick={handleCount} style={{ 
                           width: 40, backgroundColor:  "#f4efef"
                      }}>-</Button> 
                     <label style={{  width: 50 }}>{count}</label> 
                     <Button variant="light" onClick={handleCountPlas} style={{  width: 40, backgroundColor:  "#f4efef"}}>+</Button> <br /> <br />
                     <Button variant="light" style={{ backgroundColor: "#f4efef"
                      }} onClick={handleCountFinal}>Agregar al Carrito</Button>
                    
                   
                   </Card.Body>
                   </Card>
  )
}

  return (
   
      inputType === 'button' ? 
          <ButtonCount/>
      : 
          <InputCount />
  
  )
}

export default ItemCount;
