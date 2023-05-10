import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
function App(){
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path= "/" element={<ItemListContainer greeting="BookStore, los mejores libros, al mejor precio."/>}/>
      <Route path= "/category/:categoryId" element={<ItemListContainer />} />
      <Route path= "/item/:itemId" element={<ItemDetailContainer />}/>
      <Route path= "*" element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
  };
export default App;
 