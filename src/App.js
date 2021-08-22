import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Contenedor de Objetos" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
