import ItemCount from "../Item/ItemCount";

function ItemDetail({prod}) {
console.log(prod.picture);
    return (
   

      <div className='col-md-4' >

       <div className="card w-70 mt-5" >

        <div className="card-header">
            {prod.title}
        </div> 

        <div className="card-body">
            <img src={prod.picture} alt='' className='w-50' /><br></br>
           
            <label style={{  width: 100 }}>US$ {prod.price}</label>
        </div>
       </div> 
       < ItemCount  stock={10}  initial={0} />
      </div> 
    
          );
        }
        
        export default ItemDetail;
 