
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';
import Cart from './Componentes/Cart/Cart';


function App() { 
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route
            path = "/" element = { <ItemListContainer /> }  
        />
        <Route
            path = "/detalle/:detalleId" element = { <ItemDetailContainer /> }  
        />

        <Route 
            path="/categoria/:id" element={ <ItemListContainer /> } 
        />

        <Route 
            path='/cart' element={<Cart />}  
        />
        
        <Route
            path = "/*" element = { <Navigate to = '/' /> }  
        />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
