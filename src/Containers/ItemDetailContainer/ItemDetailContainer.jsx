
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "../../Item/ItemDetail";

import { getDoc, getFirestore, doc } from "firebase/firestore";
import { Button} from "react-bootstrap";



function ItemDetailContainer() {

    const [loading, setLoading] = useState (true);
    const [prod, setProd] = useState ({});
    const { detalleId } = useParams()


    const Return= ()=> {

      return (
        <>
          
            <h3> El producto no existe </h3>

            <Link to='/' >
            <Button variant="light" style={{ backgroundColor: "#F7B1BD"}} >Volver</Button>
            </Link>
            </>
    
      )
    }

    
  useEffect(() => {
    
    const db = getFirestore()
    const queryDoc = doc(db, 'items', detalleId)
    getDoc(queryDoc)
    .then(resp => {
      if (resp.data() === undefined){
        <Return />
      }else{
        setProd({id: resp.id, ...resp.data()})
      } 
    }) 
      
    .catch(err =>console.log(err))
    .finally(() => setLoading(false))
  }, [detalleId])


  

return (
    <>
    { loading ? <h4>Cargando ItemDetail...</h4> : (prod.id === undefined ? <Return /> : <ItemDetail prod = {prod} /> )
               
     }
</>
  )
}

 
export default ItemDetailContainer;