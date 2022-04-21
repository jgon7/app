
import { Button, Table } from "react-bootstrap"
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext"


function Cart() {
 

  const {cartList, vaciarCart, precioTotal, eliminarItem} = useCartContext()

 


 
  const ButtonCount= ()=> {

    return (
    
        <>
          <div style={{ marginTop: 50, padding: 20}}>
            <h3> No hay Productos agregados al Carrito </h3>
          </div>
          <div>
            <Link to='/'>
            <Button variant="light" style={{  backgroundColor: "#f4efef", borderColor: "#f4efef" }}>Seguir Comprando</Button>
            </Link>
          </div>
        </>
         
    )
  }
  
  const InputCount= ()=> {

   
   
    return (
     
      <div>
      
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Código</th>
            <th>Producto</th>
            <th>Precio Unitario ($U)</th>
            <th>Cantidad</th>
            <th>Precio Total ($U)</th>
            <th></th>
          </tr>
        </thead>

        {cartList.map((prod) => 
        <tbody key={prod.id}>
          <tr>
            <td>{prod.id}</td>
            <td>{prod.title}</td>
            <td>{prod.price}</td>
            <td>{prod.cantidad}</td>
            <td>{parseInt(prod.cantidad) * parseInt(prod.price)}</td>
            
            <td><Button variant="light" style={{  backgroundColor: "#F7B1BD", borderColor: "#F7B1BD" }} onClick={() => eliminarItem(prod.id)}>Eliminar Item</Button></td>
          </tr>
        </tbody>
        )}
      </Table>
      <div>
        <label style={{ width: 250, fontSize: 21, fontWeight: "bold" }}> Precio Total: U$ {precioTotal()} </label>
      </div>
     
      <Button variant="light" style={{  backgroundColor: "#E6C8A2", borderColor: "#F7B1BD", margin: 30 }} onClick={vaciarCart}>Vaciar Carrito</Button>
      
       <Link to='/checkout'>
       <Button variant="light" style={{  backgroundColor: "#CF775D", borderColor: "#F7B1BD" }}>Confirmar Compra</Button>
       </Link>
      
    </div>
         
    ) 
  }
  
  
  return (
    cartList.length === 0 ? 
      <ButtonCount />
      :
      <InputCount />

  )
}

export default Cart

