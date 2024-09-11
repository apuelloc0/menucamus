// PSEPayment.js OPCION1
// PSEPayment.js
import React, { useState } from 'react';
import axios from 'axios';
import '../cssfolder/PSEPayment.css';

const PSEPayment = ({ total }) => {
    const [bank, setBank] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [customer, setCustomer] = useState({ name: '', id: '' });
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        setLoading(true);
        try {
            const response = await axios.post('/iniciar-pago', {
                monto: total, // Usar el monto total pasado como prop
                descripcion: description,
                cliente: {
                    name: customer.name,
                    id: customer.id,
                    email: email,
                    bank: bank
                }
            });
            window.open(response.data.paymentUrl, '_blank');
        } catch (error) {
            console.error('Error processing payment:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="PSEPayment">
            <h2>Pagar con PSE</h2>
            <div>
                <label>Banco:</label>
                <select value={bank} onChange={(e) => setBank(e.target.value)}>
                    <option value="">Selecciona tu banco</option>
                    <option value="banco1">Banco 1</option>
                    <option value="banco2">Banco 2</option>
                    {/* Agrega más opciones de bancos aquí */}
                </select>
            </div>
            <div>
                <label>Correo Electrónico:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Descripción:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Nombre del Cliente:</label>
                <input
                    type="text"
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    required
                />
            </div>
            <div>
                <label>ID del Cliente:</label>
                <input
                    type="text"
                    value={customer.id}
                    onChange={(e) => setCustomer({ ...customer, id: e.target.value })}
                    required
                />
            </div>
            <div>
                <label>Monto:</label>
                <input
                    type="number"
                    value={total()}
                    readOnly
                />
            </div>
            <button onClick={handlePayment} disabled={loading}>
                {loading ? 'Procesando...' : 'Realizar Pago'}
            </button>
        </div>
    );
};

export default PSEPayment;











// PSEPayment.js OPCION2
// PSEPayment.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import '../cssfolder/PSEPayment.css';

// const PSEPayment = () => {
//     const [bank, setBank] = useState('');
//     const [email, setEmail] = useState('');
//     const [amount, setAmount] = useState('');
//     const [description, setDescription] = useState('');
//     const [customer, setCustomer] = useState({ name: '', id: '' });

//     const handlePayment = async () => {
//         try {
//             const response = await axios.post('/iniciar-pago', {
//                 monto: amount,
//                 descripcion: description,
//                 cliente: {
//                     name: customer.name,
//                     id: customer.id,
//                     email: email,
//                     bank: bank
//                 }
//             });
//             window.open(response.data.paymentUrl, '_blank'); // Abre la URL de pago en una nueva pestaña
//         } catch (error) {
//             console.error('Error processing payment:', error);
//         }
//     };

//     return (
//         <div className="PSEPayment">
//             <h2>Pagar con PSE</h2>
//             <div>
//                 <label>Banco:</label>
//                 <select value={bank} onChange={(e) => setBank(e.target.value)}>
//                     <option value="">Selecciona tu banco</option>
//                     <option value="banco1">Banco 1</option>
//                     <option value="banco2">Banco 2</option>
//                     {/* Agrega más opciones de bancos aquí */}
//                 </select>
//             </div>
//             <div>
//                 <label>Correo Electrónico:</label>
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Monto:</label>
//                 <input
//                     type="number"
//                     value={amount}
//                     onChange={(e) => setAmount(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Descripción:</label>
//                 <input
//                     type="text"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Nombre del Cliente:</label>
//                 <input
//                     type="text"
//                     value={customer.name}
//                     onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>ID del Cliente:</label>
//                 <input
//                     type="text"
//                     value={customer.id}
//                     onChange={(e) => setCustomer({ ...customer, id: e.target.value })}
//                     required
//                 />
//             </div>
//             <button onClick={handlePayment}>Pagar</button>
//         </div>
//     );
// };

// export default PSEPayment;






























// OPCION3
// import React, { useState } from 'react'
// import "../cssfolder/PSEPayment.css";

// const PSEPayment = () => {


//     // PSE------------------
//     const [loading, setLoading] = useState(false);

//     const iniciarPago = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.post('/iniciar-pago', {
//                 monto: 10000, // Monto del pago
//                 descripcion: 'Compra en mi tienda',
//                 cliente: { name: 'Juan Pérez', email: 'juan.perez@example.com' }
//             });
//             // Redirige al usuario a la URL proporcionada por PSE
//             window.location.href = response.data.payment_url;
//         } catch (error) {
//             console.error('Error iniciando el pago:', error);
//         } finally {
//             setLoading(false);
//         }
//     };
//     // PSE------------------

//     return (
//         <div>
//             <div>
//                 <h1>Checkout</h1>
//                 {/* Otros elementos del checkout */}
//                 <button onClick={iniciarPago} disabled={loading}>
//                     {loading ? 'Procesando...' : 'Pagar con PSE'}
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default PSEPayment

// OPCIO3 EDIT
// import React, { useState } from 'react';
// import axios from 'axios';
// import "../cssfolder/PSEPayment.css";

// const PSEPayment = () => {
//   const [loading, setLoading] = useState(false);

//   const iniciarPago = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post('/iniciar-pago', {
//         monto: 10000, // Monto del pago
//         descripcion: 'Compra en mi tienda',
//         cliente: { name: 'Juan Pérez', email: 'juan.perez@example.com' }
//       });
//       // Abre la URL de pago en una nueva pestaña o ventana
//       window.open(response.data.payment_url, '_blank');
//     } catch (error) {
//       console.error('Error iniciando el pago:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <h1>Checkout</h1>
//         {/* Otros elementos del checkout */}
//         <button onClick={iniciarPago} disabled={loading}>
//           {loading ? 'Procesando...' : 'Pagar con PSE'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PSEPayment;

