import NavBar from "./Components/NavBar";
import "./App/Style.css";
import ItemListContainer from "./Components/ItemListContainer";
/* import ModalInicio from "./Components/ModalInicio"; */

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer/>
   {/*  <ModalInicio/> */}
    </div>
  );
}

export default App;
