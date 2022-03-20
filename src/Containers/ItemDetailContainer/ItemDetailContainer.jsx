
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gFetch from "../../helpers/getFetch";
import ItemDetail from "../../Item/ItemDetail";



function ItemDetailContainer() {

    const [loading, setLoading] = useState (true);
    const [prod, setProd] = useState ({});

    const { detalleId } = useParams()

  useEffect(() => {

          gFetch
          .then(resp => resp.find(item=> item.id === detalleId))
          .then(resp => setProd(resp))
          .catch(err =>console.log(err))
          .finally(() => setLoading(false))
  
    }, [])
return (
    <>
    
    { loading ? <h4>Cargando ItemDetail...</h4> : 
           <ItemDetail prod = {prod} />
           
     }
</>
  )
}

 
export default ItemDetailContainer;