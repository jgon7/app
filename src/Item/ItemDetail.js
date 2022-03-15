

function ItemDetail({prod}) {

    return (
   

        <div>
            <img src = {prod.picture} alt='imagen' />
            <p> {prod.title} </p>
            <p> {prod.price} </p>

        </div> 
          );
        }
        
        export default ItemDetail;
