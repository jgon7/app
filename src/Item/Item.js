
import { Link } from "react-router-dom"

function Item({prod}) {

    return (
   
      <Link to={`/detalle/${prod.id}`}>

        <div className='col-md-4' >

          <div className="card w-70 mt-5" >

            <div className="card-header">
                {prod.title}
            </div> 

            <div className="card-body">
                <img src={prod.picture} alt='' className='w-50' /><br></br>
                <label style={{  width: 100 }}> $U {prod.price}</label>
           </div>
          </div> 
        </div> 
      </Link>

        
          );
        }
        
        export default Item;
