import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart'
import CheckOut from './components/CheckOut'


function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <div className='font-sans text-2xl'>
                    <CartProvider>
                        <Routes>
                            <Route path="/" element={<ItemListContainer greetings={"¡Una tienda pensada para vos!"} />} />
                            <Route path="/category/:categoryId" element={<ItemListContainer greetings={"Productos"} />} />
                            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
                            <Route path='/Cart' element={<Cart />} />
                            <Route path="/CheckOut" element={<CheckOut />} />
                        </Routes>
                    </CartProvider>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;













