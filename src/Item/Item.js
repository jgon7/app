
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";

function Item({prod}) {

    return (
   

        <div  key={prod.id} >

            <Card style={{ width: '18rem', padding: 1 }}>
             
              <Card.Body>
                <Card.Title>{prod.title}</Card.Title>
                <Card.Img variant="top" src={prod.picture} />
                
                <Card.Text>
                <div>
                     $U {prod.price}
                     </div>
                     <Button variant="dark">Ver Detalle</Button>
                     </Card.Text>
                    <ItemCount stock = '10' initial = '0'/>
                
               
              </Card.Body>
            </Card>
  
        </div> 

        
          );
        }
        
        export default Item;
