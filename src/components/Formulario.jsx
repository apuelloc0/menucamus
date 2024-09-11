import React, { useContext, useState } from 'react';
import '../cssfolder/Formulario.css'; // Asegúrate de importar el CSS
import { CartContext } from '../Context/CartContext';

const Formulario = () => {
    const { cartItems } = useContext(CartContext);
    console.log(cartItems);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [metodoPago, setMetodoPago] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [entrega, setEntrega] = useState('');

    // ----Enviar pedido a Whatsapp---------
    const realizarPedido = (e) => {
        e.preventDefault();

        const datosUsuario = { nombre, apellido, correo, metodoPago, ubicacion, entrega };
        const numeroTelefonico = "573023602591";
        // Crear mensaje con los productos
        const mensaje = `Hola, me gustaría realizar el pedido: ${cartItems.map((producto) => `${producto.name} - ${producto.price} - ${producto.amount}`).join(', ')}. Mis datos son los siguientes:
        \n- Nombre: ${datosUsuario.nombre}
        \n- Apellido: ${datosUsuario.apellido}
        \n- Correo: ${datosUsuario.correo}
        \n- Método de Pago: ${datosUsuario.metodoPago}
        \n- Entrega: ${datosUsuario.entrega}
        \n- Ubicación: ${datosUsuario.ubicacion}`;

        const enlaceWha = `https://wa.me/${numeroTelefonico}?text=${encodeURIComponent(mensaje)}`;

        // Redirigir a Whatsapp
        window.open(enlaceWha, "_blank");

        setNombre("");
        setApellido("");
        setCorreo("");
        setMetodoPago("");
        setUbicacion("");
    };

    return (
        <div className="form-container">
            <h2 className='title-form'>Contacto</h2>
            <form onSubmit={realizarPedido}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido">Apellido:</label>
                    <input
                        type="text"
                        id="apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="correo">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="correo"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="entrega">Entrega:</label>
                    <select
                        id="entrega"
                        value={entrega}
                        onChange={(e) => setEntrega(e.target.value)}
                    >
                        <option value="tienda">Retiro en tienda</option>
                        <option value="envio">Domicilio</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="metodoPago">Método de Pago:</label>
                    <select
                        id="metodoPago"
                        value={metodoPago}
                        onChange={(e) => setMetodoPago(e.target.value)}
                    >
                        <option value="tarjeta">Tarjeta de Crédito/Débito</option>
                        <option value="paypal">PayPal</option>
                        <option value="efectivo">Pago en Efectivo</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="ubicacion">Ubicación:</label>
                    <input
                        type="text"
                        id="ubicacion"
                        value={ubicacion}
                        onChange={(e) => setUbicacion(e.target.value)}
                        required
                    />
                </div>
                <div className='form-text'>
                    <p>Sus datos personales se utilizarán unicamente para procesar su pedido y respaldar su experiencia en este sitio web.</p>
                </div>
                <div className='Button-wha'>
                    <button className='Send-wha' type="submit">Enviar a Whatsapp</button>

                </div>
            </form>
        </div>
    );
};

export default Formulario;






// import React, { useContext, useState } from 'react';
// import '../cssfolder/Formulario.css'; // Asegúrate de importar el CSS
// import { CartContext } from '../Context/CartContext';

// const Formulario = () => {

//     const { cartItems } = useContext(CartContext)
//     console.log(cartItems)

//     const [nombre, setNombre] = useState('');
//     const [apellido, setApellido] = useState('');
//     const [correo, setCorreo] = useState('');
//     const [metodoPago, setMetodoPago] = useState('');
//     const [ubicacion, setUbicacion] = useState('');
//     const [entrega, setEntrega] = useState('');

//     // ----Enviar pedido a Whatsapp---------
//     const realizarPedido = (e) => {
//         e.preventDefault();

//         const datosUsuario = { nombre, apellido, correo, metodoPago, ubicacion, entrega }
//         const numeroTelefonico = "573023602591"
//         // console.log(datosUsuario.nombre)
//         // crear mensaje con los productos
//         const mensaje = `Hola, me gustaria realizar el pedido: ${cartItems.map((producto) => `${producto.name} - ${producto.price} - ${producto.amount}`)}. Mis datos son los siguientes:
//         \n- Nombre: ${datosUsuario.nombre}
//         \n- Apellido: ${datosUsuario.apellido}
//         \n- Correo: ${datosUsuario.correo}
//         \n- Metodo de Pago: ${datosUsuario.metodoPago}
//         \n- Entrega: ${datosUsuario.entrega}
//         \n- Ubicacion: ${datosUsuario.ubicacion}`
//         // const enlaceWha = `https://wa.me/${numeroTelefonico}?text=Hola,%20me%20gustaria%20realizar%20el%20pedido:%0A${mensaje}`

//         const enlaceWha = `https://wa.me/${numeroTelefonico}?text=${mensaje}`
//         // console.log(mensaje)

//         // Redirigir a Whatsapp
//         window.open(enlaceWha, "_blank")

//         setNombre("")
//         setApellido("")
//         setCorreo("")
//         setMetodoPago("")
//         setUbicacion("")
//     }

//     return (
//         <div className="form-container">
//             <h2 className='title-form'>Contacto</h2>
//             <form onSubmit={realizarPedido}>
//                 <div className="form-group">
//                     <label htmlFor="nombre">Nombre:</label>
//                     <input
//                         type="text"
//                         id="nombre"
//                         value={nombre}
//                         onChange={(e) => setNombre(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="apellido">Apellido:</label>
//                     <input
//                         type="text"
//                         id="apellido"
//                         value={apellido}
//                         onChange={(e) => setApellido(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="correo">Correo Electrónico:</label>
//                     <input
//                         type="email"
//                         id="correo"
//                         value={correo}
//                         onChange={(e) => setCorreo(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="entrega">Entrega:</label>
//                     <select
//                         id="entrega"
//                         value={entrega}
//                         onChange={(e) => setEntrega(e.target.value)}
//                     >
//                         <option value="tienda">Retiro en tienda</option>
//                         <option value="envio">Envío</option>
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="metodoPago">Método de Pago:</label>
//                     <select
//                         id="metodoPago"
//                         value={metodoPago}
//                         onChange={(e) => setMetodoPago(e.target.value)}
//                     >
//                         <option value="efectivo">Efectivo</option>
//                         <option value="transferencia">Transferencia Bancaria</option>
//                         <option value="contraentrega">Pago contraentrega</option>
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="ubicacion">Ubicación:</label>
//                     <input
//                         type="text"
//                         id="ubicacion"
//                         value={ubicacion}
//                         onChange={(e) => setUbicacion(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="submit-button">Enviar a Whatsapp</button>
//             </form>
//         </div>
//     );
// };

// export default Formulario;
