
import { addDoc, collection,getFirestore } from 'firebase/firestore'
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext"
import { useState } from "react";

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
        console.log(orden)
    
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
        
            <> 
            <form 
                onSubmit={generarOrden}                 
            >
                <input 
                    required
                    type='text' 
                    name='name' 
                    placeholder='Nombre Completo' 
                    value={dataForm.name}
                    onChange={handleChange}
                /><br />
                <input 
                    required
                    type='text' 
                    name='phone'
                    placeholder='Telefono' 
                    value={dataForm.phone}
                    onChange={handleChange}
                /><br/>
                <input 
                     required
                    type='email' 
                    name='email'
                    placeholder='Email' 
                    value={dataForm.email}
                    onChange={handleChange}
                /><br/>
                 <input 
                    required
                    type='email' 
                    name='email2'
                    placeholder='Confirmar email' 
                    value={dataForm.email2}
                    onChange={handleChange}
                /><br/>
                <button>Finalizar Compra</button>
            </form>
              
            </>
             
        )
      }

      const Volver= ()=> {

        return (
        
            <div>
                <h2> ¡Gracias por su compra! </h2>
                    {id && <label className={'alert alert-success'} >El id de su compra es: {id}</label>}
                    
            <Link to='/'>
               <button className="btn btn-outline-primary" onClick={vaciarCart}>Continuar</button>
            </Link>

            </div>
             
        )
      }

    return (
   
       
        id == null ? 
        <Out />
        :
        <Volver />
        
          );
        }
        
        export default Checkout;