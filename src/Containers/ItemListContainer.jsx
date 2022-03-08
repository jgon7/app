
import { useEffect, useState } from "react";
import gFetch from "../helpers/getFetch";
import ItemList from "../Item/ItemList";

function ItemListContainer() {

  const [loading, setLoading] = useState (true);
  const [prods, setProds] = useState ([]);


  useEffect(() => {
    gFetch
    .then(resp => setProds(resp))
    .catch(err =>console.log(err))
    .finally(() => setLoading(false))
    console.log(document.querySelectorAll(" p * div "));

  }, [])

  console.log(prods)
  return (
    <>
       
       { loading ? <h3>Cargando...</h3> : 
              <ItemList prods = {prods} />
        }
  </>
  )
}

 
export default ItemListContainer;