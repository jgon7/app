import Item from "./Item";



function ItemList({prods}) {

    return (
   

        prods.map((prod)  => 
              
        <div  key={prod.id} >
        <Item prod= {prod}/>
        </div>
         )
        
          );
        }
        
        export default ItemList;
