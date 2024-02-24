
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

    return (
        <>
            <Navbar />
            <ItemListContainer greeting="¡Una tienda pensada para vos!" />

        </>
    )
}

export default App