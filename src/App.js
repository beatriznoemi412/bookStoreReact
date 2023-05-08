
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
function App(){
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"BookStore, los mejores libros, al mejor precio."}/>
      <ItemDetailContainer />
    </div>
  );
  };
export default App;
 