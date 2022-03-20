
import { useEffect, useState } from "react";
import gFetch from "../../helpers/getFetch";
import ItemList from "../../Item/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {

  const [loading, setLoading] = useState (true);
  const [prods, setProds] = useState ([]);

  const { id } = useParams()

  useEffect(() => {

    if (id) {

        gFetch
        .then(resp => setProds(resp.filter(prod=> prod.categoria === id)))
        .catch(err =>console.log(err))
        .finally(() => setLoading(false))
   } else {
        gFetch
        .then(resp => setProds(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))            
        }


  }, [id])

  console.log(id)
  return (
    <>
       
       { loading ? <h3>Cargando ...</h3> : 
              <ItemList prods = {prods} />
        }

    
  </>
  )
}

 
export default ItemListContainer;