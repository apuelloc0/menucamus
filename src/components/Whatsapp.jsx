import React from 'react'
import whatsapp from "../icons/WhatsApp.png.webp";
import "../cssfolder/Whatsapp.css";
import { Link } from 'react-router-dom';

const Whatsapp = () => {
    return (
        <Link to="https://wa.link/rhbfsl">
            <div className="Whatsapp-button">
                <img src={whatsapp} alt="" />
            </div>
        </Link>
    )
}

export default Whatsapp