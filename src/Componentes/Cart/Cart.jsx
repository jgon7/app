import { Table } from "react-bootstrap"
import { useCartContext } from "../../Context/CartContext"

function Cart() {
  
  const {cartList, vaciarCart} = useCartContext()

  
  return (
     <div >

<Table striped bordered hover size="sm" >
  <thead>
    <tr>
      <th>Código</th>
      <th>Producto</th>
      <th>Precio Unitario ($U)</th>
      <th>Cantidad</th>
    </tr>
  </thead>

     { cartList.map((prod)   => 

  <tbody key={prod.id}>
    <tr >
      <td>{prod.id}</td>
      <td>{prod.title}</td>
      <td>{prod.price}</td>
      <td>{prod.cantidad}</td>
    </tr>
  </tbody>

     )} 
     </Table>
      <button className="btn btn-outline-primary" onClick={vaciarCart} >Vaciar Carrito</button>
     </div>
  )
}

export default Cart

