
import { addDoc, collection,getFirestore } from 'firebase/firestore'
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext"
import { useState } from "react";
import { Button, Col, Form, Row } from 'react-bootstrap';

function Checkout() {
    const [dataForm, setDataForm] = useState({name: '', phone: '',email: '',  email2: ''})
    const [id, setId] = useState(null)

    const {cartList, precioTotal, vaciarCart} = useCartContext()

    const generarOrden= async (e)=>{
        e.preventDefault();

        if (dataForm.email === dataForm.email2) {
        let date = new Date().toDateString();

     
        let orden = {}      
    
        orden.buyer = dataForm
        orden.total = precioTotal();
        orden.fecha = date;
        orden.estado = "GENERADA";
    
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.title;
            const precio = cartItem.price * cartItem.cantidad;
            
            return {id, nombre, precio}   
        })
     
    
        const db = getFirestore()
        const queryCollectionSet = collection(db, 'orders')
        addDoc(queryCollectionSet, orden)
        .then(resp => setId(resp.id))
        .catch(err => console.error(err))
    
      } else {
        alert("Ambos mail deben ser iguales")
    }
    }
      const handleChange = (e) => {
        setDataForm({
          ...dataForm,
          [e.target.name]: e.target.value,
        
      })
    }

    const Out= ()=> {

        return (

            <div style={{ borderColor: "#f4efef", padding: 70, marginLeft: 300 }}> 
        
            <Form onSubmit={generarOrden} >
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2} >
                Nombre Completo
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="text"  name='name' 
                    value={dataForm.name}
                    onChange={handleChange} />
              </Col>
            </Form.Group>
          
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2} >
                Telefono
              </Form.Label>
              <Col sm={2}>
                <Form.Control type='text' 
                    name='phone'
                    value={dataForm.phone}
                    onChange={handleChange} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={4}>
                <Form.Control type='email' 
                    name='email'
                    value={dataForm.email}
                    onChange={handleChange} />
              </Col>
            </Form.Group>


            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Confirmar Email
              </Form.Label>
              <Col sm={4}>
                <Form.Control type='email' 
                    name='email2'
                    value={dataForm.email2}
                    onChange={handleChange} />
              </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 3, offset: 2 }}>
                    <Button type= "Submit"variant="light" style={{  backgroundColor: "#f4efef", borderColor: "#f4efef" }}>Finalizar Compra</Button>
                </Col>
            </Form.Group>

            </Form>
            </div>
        )
      }

      const Return= ()=> {

        return (
            <>
            <div style={{ marginTop: 50, padding: 20}}>
                <h3> ¡Gracias por su compra! </h3>
                    {id && <label className={'alert alert-success'} style={{  backgroundColor: "#F7B1BD" }} >El id de su compra es: {id}</label>}

            </div>  
            <div>     
            <Link to='/'>
            <Button variant="light" style={{  backgroundColor: "#f4efef", borderColor: "#f4efef" }} onClick={vaciarCart}>Continuar</Button>
              
            </Link>
            </div> 
            </>
            
             
        )
      }

    return (
   
       
        id == null ? 
        <Out />
        :
        <Return />
        
          );
        }
        
        export default Checkout;