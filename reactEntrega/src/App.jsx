import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer greetings={"¡Una tienda pensada para vos!"} />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer greetings={"Productos"} />} />
                        <Route path="/detail/:productId" element={<ItemDetailContainer />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path="/checkOut" element={<CheckOut />} />
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;










