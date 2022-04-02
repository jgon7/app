
import { useEffect, useState } from "react";
import ItemList from "../../Item/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer() {

  const [loading, setLoading] = useState (true);
  const [prods, setProds] = useState ([]);

  const { id } = useParams()


  useEffect(()=> {

    if (id) {
        
      const db = getFirestore()

        const queryCollection =  collection(db, 'items' )
        const queryFilter = query(queryCollection, 
            where('categoria','==',id) 
        )
        getDocs(queryFilter)
        .then(resp => setProds( resp.docs.map(producto =>( {id: producto.id, ...producto.data()}) ) ) )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))  
  
  } else {
         const db = getFirestore()

        const queryCollection =  collection(db, 'items' )
         getDocs(queryCollection)
         .then(resp => setProds( resp.docs.map(producto =>( {id: producto.id, ...producto.data()}) ) ) )
         .catch(err => console.log(err))
         .finally(()=> setLoading(false))   


  }
}, [id])





  return (
    <>
       
       { loading ? <h3>Cargando ...</h3> : 
              <ItemList prods = {prods} />
        }

    
  </>
  )
}

 
export default ItemListContainer;