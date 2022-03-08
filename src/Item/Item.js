
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
                <br />
                <Card.Text> <br />
                <label style={{  width: 50 }}>{prod.price}</label>  <br />
                     <Button variant="dark">Ver Detalle</Button> <br />
                     </Card.Text>
                    <ItemCount stock = '10' initial = '0'/>
                
               
              </Card.Body>
            </Card>
  
        </div> 

        
          );
        }
        
        export default Item;
