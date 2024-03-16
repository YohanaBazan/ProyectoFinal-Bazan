
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/"
                        element={<ItemListContainer greetings={"¡Una tienda pensada para vos!"} className="font-size: 1.875rem;"/>}
                    />
                    <Route path="/category/:categoryId"
                        element={<ItemListContainer greetings={"Listado de Productos filtrados"} />}
                    />
                    <Route path="/detail/:productId" element={<ItemDetailContainer />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;