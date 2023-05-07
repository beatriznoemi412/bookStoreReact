
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
function App(){
  
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"BookStore, los mejores libros, al mejor precio."}/>
      <ItemCount initial={1} stock={15} onAdd={(amount)=> console.log("Cantidad", amount)}/>
</div>
  );
  };
export default App;
 