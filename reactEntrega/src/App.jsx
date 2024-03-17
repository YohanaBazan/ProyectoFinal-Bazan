
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
                <div className='font-sans text-2xl'>
                <Routes >
    
                    <Route path="/"
                        element={<ItemListContainer greetings={"¡Una tienda pensada para vos!"} />}
                    />
        
                    <Route path="/"
                        element={<ItemListContainer greetings={"¡Una tienda pensada para vos!"} />}
                    />
                    <Route path="/category/:categoryId"
                        element={<ItemListContainer greetings={"Productos"} />}
                    />
                    <Route path="/detail/:productId" element={<ItemDetailContainer />} />
                </Routes>

                </div>
                
            </BrowserRouter>
        </>
    );
}

export default App;