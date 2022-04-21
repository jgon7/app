
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../Item/ItemDetail";

import { getDoc, getFirestore, doc } from "firebase/firestore";



function ItemDetailContainer() {

    const [loading, setLoading] = useState (true);
    const [prod, setProd] = useState ({});

    const { detalleId } = useParams()


    
  useEffect(() => {
    
    const db = getFirestore()
    const queryDoc = doc(db, 'items', detalleId)
    getDoc(queryDoc)
    .then(resp =>setProd({id: resp.id, ...resp.data()}))
    .catch(err =>console.log(err))
    .finally(() => setLoading(false))
  }, [detalleId])


  

return (
    <>
    { loading ? <h4>Cargando ItemDetail...</h4> : 
           <ItemDetail prod = {prod} />
           
     }
</>
  )
}

 
export default ItemDetailContainer;