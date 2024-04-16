import React, { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleConfirm = (event) => {
        event.preventDefault();
        const userData = {
            name,
            phone,
            email,
        };
        onConfirm(userData);
    };

    return (
        <div className="container">
            <form onSubmit={handleConfirm} className="form p-4 border border-gray-300 rounded-lg">
                <label className="Label mb-2">
                    Nombre
                    <input
                        className="Input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label className="Label mb-2">
                    Teléfono
                    <input
                        className="Input"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </label>
                <label className="Label mb-2">
                    Email
                    <input
                        className="Input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" className="Button bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600">
                    Crear orden
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
