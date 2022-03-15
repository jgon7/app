
import { useEffect, useState } from "react";
import gFetch from "../../helpers/getFetch";
import ItemDetail from "../../Item/ItemDetail";


function ItemDetailContainer() {

    const [loading, setLoading] = useState (true);
    const [prod, setProd] = useState ({});


  useEffect(() => {
    gFetch
    .then(resp => setProd(resp.find(prod => prod.id === 1)))
    .catch(err =>console.log(err))
    .finally(() => setLoading(false))

  }, [])

  console.log(prod)
return (
    <>
       
    { loading ? <h4>Cargando ItemDetail...</h4> : 
           <ItemDetail prod = {prod} />
     }
</>
  )
}

 
export default ItemDetailContainer;