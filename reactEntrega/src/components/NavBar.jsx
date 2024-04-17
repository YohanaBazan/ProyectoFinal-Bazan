import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (

        <nav nav className="bg-purple-400 py-4 h-17">
            <div className=" container mx-auto flex justify-between items-center flex-grow">
                <div className='h-14 w-14 p-0 items-left'>
                    < img src="./src/assets/images/logo.png" alt="Logo" />
                </div>
                <div className="flex justify-center items-center flex-grow">
                    <button className='p-3 h-10 w-10 border-none bg-transparent'>
                        <img src="./src/assets/images/buscar.png" alt="Buscador" />
                    </button>
                    <form className="bg-white p-1.5 h-10 w-50 rounded-lg">
                        <input type="text" />
                    </form>
                </div>


                <section className="ml-20 flex items-center justify-center flex-grow">
                    <div className=" flex justify-between space-x-4">
                        <h1><Link to="/">Inicio</Link></h1>
                        <Link to="/category/Remeras" >Remeras</Link>
                        <Link to="/category/Pantalones" >Pantalones</Link>
                        <Link to="/category/Buzos" >Buzos</Link>
                    </div>
                </section>
                <CartWidget />
            </div>
        </nav>
    )
}
export default NavBar