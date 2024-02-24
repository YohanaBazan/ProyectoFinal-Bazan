
import { useState } from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
    const [showCategories, setShowCategories] = useState(false);



    return (<nav className="bg-purple-400 py-4">
        <div className="container mx-auto flex justify-between items-center flew grow">

            <div className='h-[15%] w-[15%] p-0 items-left'>
                <img src="./src/assets/images/logo.png" alt="Logo" />
            </div>


            <div className="flex justify-center items-center flex-grow">
                <button className='p-3 h-[7%] w-[10%] border-none bg-transparent'>
                    <img src="./src/assets/images/buscar.png" alt="Buscador" />
                </button>

                <form className="bg-white p-2 h-[20%] w-full rounded-lg">
                    <input type="text" />
                </form>
            </div>


            <div className="ml-20 flex items-center justify-end">
                <ul className="flex space-x-4 justify-end">
                    <li><button className="text-white text-xl">Inicio</button></li>
                    <li>
                        <button className="text-white text-xl" href="" onClick={() => setShowCategories(!showCategories)}>Productos</button>
                        {showCategories && (
                            <ul className="absolute bg-white text-xl w-[7%]">
                                <li>
                                    <button className="hover:underline">
                                        Remeras

                                    </button>
                                </li>
                                <li>
                                    <button className="hover:underline">
                                        Pantalones

                                    </button>
                                </li>
                                <li>
                                    <button className="hover:underline">
                                        Buzos

                                    </button>

                                </li>
                            </ul>)}

                    </li>

                    <li><button className="text-white text-xl">Contacto</button></li>
                    <li>

                        <CartWidget />
                    </li>
                </ul>
            </div>
        </div>

    </nav>);
}

export default Navbar;