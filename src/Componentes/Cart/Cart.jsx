
import { Table } from "react-bootstrap"
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext"


function Cart() {
 

  const {cartList, vaciarCart, precioTotal, eliminarItem} = useCartContext()

 


 
  const ButtonCount= ()=> {

    return (
    
        <>
            <h2> No hay Productos agregados al Carrito </h2>
            <Link to='/'>
               <button className="btn btn-outline-primary" onClick={() => console.log('seguir comprando')}>Seguir Comprando</button>
            </Link>
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
           
            <td><button className="btn btn-outline-primary" onClick={() => eliminarItem(prod.id)}>Eliminar Item</button></td>
          </tr>
        </tbody>
        )}
      </Table>
      
      <label style={{ width: 80 }}> Precio Total: {precioTotal()} </label>
      <button className="btn btn-outline-primary" onClick={vaciarCart}>Vaciar Carrito</button>
      <Link to='/checkout'>
      <button className="btn btn-outline-secondary">Confirmar Compra</button>
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

