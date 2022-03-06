
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer';


function App() { 
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
