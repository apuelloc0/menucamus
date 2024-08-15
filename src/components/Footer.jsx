import React from 'react'
import "../cssfolder/Footer.css";
import logo from "../icons/logoBlessed.png";
import { Link } from 'react-router-dom';
import instagram from "../icons/instaicon.svg";
import facebook from "../icons/facebook.svg";

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="Footer-top">
                <div className="Footer-logo">
                    <img src={logo} alt="logo-img" />
                </div>
                <div className="Social-media">
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                </div>
                <div className="Footer-Contact">
                    <span>Contacto</span>
                    <span>300-6624419</span>
                    <span>@perfumesblessed_</span>

                </div>

                <div className="Footer-categories">
                    <Link to="/productos/arabe"><span>Arabe</span></Link>
                    <Link to="/productos/diseñador"><span>Diseñador</span></Link>
                    <Link to="/productos/nicho"><span>Nicho</span></Link>
                </div>
                <div className="Footer-Pay">
                    <span>Metodos de Pago:</span>
                    <span>Transferencia Bancaria</span>
                    <span>Efectivo</span>
                    <span>Contraentrega</span>
                </div>
            </div>
            <div className="Footer-bottom">
                <p>© 2024 Blessed Perfumería - Made With Love @apuelloc</p>
            </div>
        </div>
    )
}

export default Footer
